import { useState } from "react";

export default function useChangeVisible() {
  const [visible, setVisible] = useState<'form' | 'table'>('table');
  
  const showTable = () => setVisible('table');
  const showForm = () => setVisible('form');

  return {
    formVisible: visible === 'form',
    tableVisible: visible === 'table',
    showTable,
    showForm
  }
}