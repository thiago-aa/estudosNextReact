import { useState } from "react";
import Customer from "../core/Customer";
import Input from "./Input";
import Button from "./Button";

interface FormProps {
  customer: Customer;
  cancel: () => void;
  customerChange: (customer: Customer) => void;
}

export default function Form(props: FormProps) {
  const {customer} = props
  const id = customer?.id;
  const [name, setName] = useState( customer.name ? customer.name : '');
  const [age, setAge] = useState( customer ? customer.age : '');
  return (
    <div>
      {
        id ? (
          <Input readOnly label="ID" value={id} className="mb-4"/>
        ) : false
        
      }
      <Input label="Nome" value={name} onChange={setName} className="mb-4"/>
      <Input label="Idade" type="number" value={age}  onChange={setAge}/>
      
      <div className="flex justify-end mt-8">
        <Button bgColor="blue" className="mr-3" onClick={() => props.customerChange?.( new Customer(name, +age, id))}>
          {id ? 'Alterar' : 'Criar'}
        </Button>
        <Button onClick={props?.cancel}>Cancelar</Button>
      </div>
    </div>
  )
}