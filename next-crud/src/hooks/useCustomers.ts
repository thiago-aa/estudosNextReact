import { useEffect, useState } from "react";
import Customer from "../core/Customer";
import CustomerRepository from "../core/CustomerRepository";
import CustomerCollection from "../backend/db/CustomerColetcion";
import useChangeVisible from "./useChangeVisible";

export default function useCustomer() {
  const repo: CustomerRepository = new CustomerCollection();
  const {formVisible, tableVisible, showForm, showTable} = useChangeVisible()

  const [customer, setCustomer] = useState<Customer>(Customer.empty());
  const [customers, setCustomers] = useState<Customer[]>([])


   function getAll() {
    repo.getAll().then(customers => {
      setCustomers(customers);
      showTable();
    });
  }
  
  useEffect(getAll, []);

  function selectedCustomer(customer: Customer) {
    setCustomer(customer);
    showForm();
  }

  async function deleteCustomer(customer: Customer) {
    await repo.delete(customer);
    getAll();
  }
  
  function newCustomer() {
    setCustomer(Customer.empty());
    showForm();
  }

  async function saveCustomer(customer: Customer) {
    await repo.save(customer);
    getAll();
  }

  return {
    selectedCustomer,
    deleteCustomer,
    newCustomer,
    saveCustomer,
    customer,
    customers,
    formVisible,
    tableVisible,
    showTable
  }
}