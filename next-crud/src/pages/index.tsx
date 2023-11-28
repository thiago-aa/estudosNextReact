import Layout from '../components/Layout'
import Table from '../components/Table'
import Customer from '../core/Customer'


export default function Home() {
  const customers = [
    new Customer('Ana', 22, '1'),
    new Customer('Bia', 21, '2'),
    new Customer('Carlos', 45, '3'),
    new Customer('Barbosa', 56, '4'),
    new Customer('Mateo', 2, '5')
  ]

  return (
    <div className='flex justify-center items-center h-screen'>
      <Layout title='Cadastro Simples'>
        <Table customers={customers}/>
      </Layout>
    </div>
  )
}
