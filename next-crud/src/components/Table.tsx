import Customer from "../core/Customer";
import { IconEdit, IconTrash } from "./Icons";

interface TableProps {
  customers: Customer[];
  selectedCustomer?: (customer: Customer) => void;
  deleteCustomer?: (customer: Customer) => void;
}

export default function Table(props: TableProps)  {
  const { customers, selectedCustomer, deleteCustomer } = props;
  const showActions = selectedCustomer || deleteCustomer 

  function renderHead() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {showActions ? <th className="text-center p-4">Ações</th> : null}
      </tr>
    )
  }

  function renderButtons(customer: Customer) {
    return (
      <td className="flex justify-center">
        {selectedCustomer ? (
          <button onClick={() => selectedCustomer(customer)}className={`
          text-green-600 rounded-full hover:bg-purple-50 p-2
          `}>
            {IconEdit}
          </button>
        ) : null}
        {deleteCustomer ? (
          <button onClick={() => deleteCustomer(customer)} className={`
          text-red-600 rounded-full hover:bg-purple-50 p-2 
          `}>
            {IconTrash}
          </button>
        ) : null}
      </td>
    )
  }

  function renderCustomers() {
    return ( customers?.map((customer, i) => (
      <tr key={customer.id} className={`
        ${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}
      `}>
        <td className="text-left p-4">{customer.id}</td>
        <td className="text-left p-4">{customer.name}</td>
        <td className="text-left p-4">{customer.age}</td>
        {showActions? renderButtons(customer) : false}
      </tr>
    ))
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>        
        {renderHead()}
      </thead>
      <tbody>
        {renderCustomers()}
      </tbody>
    </table>
  )
}