import { useRouter } from "next/router"
import Link from "next/link";

export default () => {
  const router = useRouter();
  
  return (
    <div>
      <h1>Rotas Params</h1>
      <h2>Nome: {router.query.nome}</h2>
      <h2>id: {router.query.id}</h2>
      <Link href="/rotas">
        <button>Voltar</button>
      </Link>
    </div>
)}