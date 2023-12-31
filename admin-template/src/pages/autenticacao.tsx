import AuthInput from "../components/auth/AuthInput";
import { useState } from "react";
import { WarningIcon } from "../components/icons";
import useAuth from "../data/hook/useAuth";


export default function Autenticacao() {

  const {googleLogin, login, register} = useAuth()

  const [mode, setMode] = useState<'login' | 'cadastro'>('login');
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function showError(msg: string, seconds = 5) {
    setError(msg);
    setTimeout(() => setError(null), seconds * 1000)
  }
  
  async function submit() {
    if(login && register) {
      try{
        if(mode === 'login') {
         await login(email, password);
        } else {
         await register(email, password);
        }  
      } catch(e) {
        showError('Login não encontrado');
      }
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className=" hidden md:block w-1/2 lg:w-2/3">
        <img 
          src="https://source.unsplash.com/random" 
          alt="Imagem da tela de autenticação" 
          className="h-screen w-full object-cover"
        />
      </div>
      <div className={` m-10 w-full md:w-1/2 lg:w-1/3`}>
        <h1 className={`
          text-3xl font-bold mb-5
        `}>
          {mode === 'login' ? 'Entre com a sua Conta' : 'Cadastre-se na plataforma'}
        </h1>
        {error ? (
          <div className={`
            flex items-center
            bg-red-400 text-white py-3 px-5 my-2
            border border-red-700 rounded-lg
          `}>
            {WarningIcon()}
            <span  className="ml-3 text-sm">{error}</span>
          </div>
        ): null}

        <AuthInput label="Email" type="email" value={email} getValue={setEmail} required/>

        <AuthInput label="Senha" type="password" value={password} getValue={setPassword} required/>

        <button 
          onClick={submit} className={`
            w-full bg-indigo-500 hover:bg-indigo-400
            text-white rounded-lg px-4 py-3 mt-6
          `}
        >
          {mode === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>
        <hr className={`my-6 border-gray-300 w-full`}/>
        <button onClick={googleLogin} className={`
          w-full bg-red-500 hover:bg-red-400
          text-white rounded-lg px-4 py-3
        `}>
          Entrar com o Google
        </button>
        {
          mode === 'login' ? (
            <p className="mt-8">
              Novo por aqui?
              <a onClick={() => setMode('cadastro')} className={`
                text-blue-500 hover:text-blue-700 font-semibold
                cursor-pointer
              `}> Crie uma conta gratuitamente
              </a>
            </p>
          ) : (
            <p className="mt-8">
              Já faz parte da nossa comunidade? 
              <a onClick={() => setMode('login')} className={`
                text-blue-500 hover:text-blue-700 font-semibold
                cursor-pointer
              `}> Entre com as suas Credenciais
              </a>
            </p>
          )
        }
      </div>
    </div>
  )
}