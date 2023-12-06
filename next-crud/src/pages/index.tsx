import Button from '../components/Button';
import Form from '../components/Form';
import Layout from '../components/Layout'
import Table from '../components/Table'
import useCustomer from '../hooks/useCustomers';


export default function Home() {
  const {
    customer,
    customers,
    deleteCustomer,
    newCustomer,
    saveCustomer,
    selectedCustomer,
    showTable,
    tableVisible
  } = useCustomer()
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title='Cadastro Simples'>
        {tableVisible ? (
          <>
            <div className='flex justify-end'>
              <Button bgColor='green' className='mb-2' onClick={newCustomer}>Novo Cliente</Button>
            </div>
            <Table selectedCustomer={selectedCustomer} deleteCustomer={deleteCustomer} customers={customers}/>
          </>        
        ) : (
          <Form customer={customer} cancel={showTable} customerChange={saveCustomer}/>
        )}
      </Layout>
    </div>
  )
}
