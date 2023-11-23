import { createContext, useState } from 'react';
import firebase from "../../firebase/config";
import User from '@/src/model/User';
import route from 'next/router';

interface AuthContextProps {
  user?: User;
  googleLogin?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({})

async function normalizeUser(firebaseUser: firebase.User): Promise<User> {
  const token = await firebaseUser.getIdToken();

  return {
    uid: firebaseUser.uid,
    name: firebaseUser.displayName,
    email: firebaseUser.email,
    token,
    provider: firebaseUser.providerData[0]?.providerId,
    urlImage: firebaseUser.photoURL
  }
}

export function AuthProvider(props: any) {
  const [user, setUser] = useState<User>();

  async function googleLogin() {
    const resp = await firebase.auth().signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
    if(resp.user?.email) {
      const auxUser = await normalizeUser(resp.user)
      setUser(auxUser);
      route.push('/');
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      googleLogin
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext;