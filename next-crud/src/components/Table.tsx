import Customer from "../core/Customer";

interface TableProps {
  customers: Customer[];
}

export default function Table(props: TableProps)  {
  const { customers } = props;

  function renderHead() {
    return (
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
    )
  }

  function renderCustomers() {
    return ( customers?.map((customer, i) => (
      <tr key={customer.id}>
        <td>{customer.id}</td>
        <td>{customer.name}</td>
        <td>{customer.age}</td>
      </tr>
    ))
    )
  }

  return (
    <table>
      <thead>        
        {renderHead()}
      </thead>
      <tbody>
        {renderCustomers()}
      </tbody>
    </table>
  )
}