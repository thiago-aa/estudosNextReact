import { useState } from "react"

export default () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [users, setUsers] = useState([]);

  const saveUser = async () => {
    await fetch('/api/form', {
      method: 'POST',
      body: JSON.stringify({ name: name, age: age })
    })

    const resp = await fetch('/api/form ')
    const resUsers = await resp.json();
    setUsers(resUsers);

    setAge(0);
    setName('');
  }

  const renderUsers = () => users.map((u, i) => <li key={i}>{u.name} tem {u.age} anos!</li>)


  return (
    <div>
      <h1>Integrando com API #02</h1>
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <input type="number" value={age} onChange={e => setAge(+e.target.value)}/>
      <button onClick={saveUser}>Enviar</button>
      <ul>
        {renderUsers()}
      </ul>
    </div>
  )
}