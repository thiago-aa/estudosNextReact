import Link from "next/link"
import router from "next/router"

export default () => {
  const navegacaoSimples = (url) => {
    router.push(url);
  }

  const navegacaoParams = () => {
    router.push({
      pathname: '/rotas/params',
      query: {
        id: '12',
        nome: 'thiago'
      }
    })
  }


  return (
    <div>
      <h1>Rotas Index</h1>
      <h2>Utilizando Link</h2>
      <ul style={{border:'1px white solid'}}>
        <Link href="/rotas/params?id=12&nome=thiago">
          <li>Params</li>
        </Link>
        <Link href="/rotas/123/buscar">
          <li>Buscar</li>
        </Link>
        <Link href="/rotas/1234/nomeURL">
          <li>nomeURL</li>
        </Link>
      </ul>
      <br />
      <br />
      <br />
      <h2>Utilizando Router</h2>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border:'1px white solid', padding: '5px'}}>
          <button onClick={navegacaoParams}>Params</button>
          <button onClick={() => router.push('/rotas/123/buscar')}>Buscar</button>
          <button onClick={() => navegacaoSimples('/rotas/1234/nomeURL')}>nomeURL</button>
        </div>
    </div>  
  )
}