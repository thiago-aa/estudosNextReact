import { createContext, useEffect, useState } from 'react';
import firebase from "../../firebase/config";
import User from '@/src/model/User';
import route from 'next/router';
import Cookies from 'js-cookie';

interface AuthContextProps {
  user?: User | null;
  googleLogin?: () => Promise<void>;
  logout?: () => Promise<void>;
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

function manageCookie(logged: any) {
  if(logged) {
    Cookies.set('admin-template-auth', logged, {expires: 7});
  } else {
    Cookies.remove('admin-template-auth');
  }
}

export function AuthProvider(props: any) {
  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState(true);

  async function configSection(firebaseUser: any) {
    if(firebaseUser?.email) {
      const user = await normalizeUser(firebaseUser);
      setUser(user)
      manageCookie(true);
      setLoading(false);
      return user.email;
    } else {
      setUser(null);
      manageCookie(false);
      setLoading(false);
      return false;
    }
  }

  async function googleLogin() {
    try {
      const resp = await firebase.auth().signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )
  
      configSection(resp.user);
      route.push('/');
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    try {
      setLoading(true);
      await firebase.auth().signOut();
      await configSection(null);
    } finally {
      setLoading(false);
      route.push('/autenticacao');
    }
  }

  useEffect(() => {
    if(Cookies.get('admin-template-auth')) {
      const cancel = firebase.auth().onIdTokenChanged(configSection);
      return () => cancel();
    }
  },[])

  return (
    <AuthContext.Provider value={{
      user,
      googleLogin,
      logout
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext;