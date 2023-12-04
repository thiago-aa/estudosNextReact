import { useState } from 'react';
import Button from '../components/Button';
import Form from '../components/Form';
import Layout from '../components/Layout'
import Table from '../components/Table'
import Customer from '../core/Customer'


export default function Home() {
  const [visible, setVisible] = useState<'form' | 'table'>('table');

  const customers = [
    new Customer('Ana', 22, '1'),
    new Customer('Bia', 21, '2'),
    new Customer('Carlos', 45, '3'),
    new Customer('Barbosa', 56, '4'),
    new Customer('Mateo', 2, '5')
  ]
  
  function selectedCustomer (customer: Customer) {
    console.log('editar o cabra:', customer.name);
  }

  function deleteCustomer (customer: Customer) {
    console.log('deletar o cabra:', customer.name);
  }

  function saveCustomer(customer: Customer) {
    console.log(customer);
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title='Cadastro Simples'>
        {visible === 'table' ? (
          <>
            <div className='flex justify-end'>
              <Button bgColor='green' className='mb-2' onClick={() => setVisible('form')}>Novo Cliente</Button>
            </div>
            <Table selectedCustomer={selectedCustomer} deleteCustomer={deleteCustomer} customers={customers}/>
          </>        
        ) : (
          <Form customer={customers[0]} cancel={() => setVisible('table')} customerChange={saveCustomer}/>
        )}
      </Layout>
    </div>
  )
}
