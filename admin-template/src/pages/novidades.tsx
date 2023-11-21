import Layout from '../components/template/Layout'
import useAppData from '../data/hook/useAppData'

export default function Home() {
  const { toggleTheme } = useAppData();
  
  return (
    <Layout title='Novidades' subTitle='Aqui você verá as novidades'>
      <button onClick={toggleTheme}>Alternar Tema</button>
    </Layout>    
  )
}
