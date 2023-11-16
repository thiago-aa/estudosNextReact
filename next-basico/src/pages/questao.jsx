import { useEffect, useState } from "react"

export default () => {
  const [questao, setQuestao] = useState();
  useEffect(() => {
    fetch('http://localhost:3000/api/questao/123').then(
      resp => resp.json()).then(setQuestao)
  }, [])
  console.log(questao?.enunciado);
  return (
    <div>
      <h1>{questao?.id} - {questao?.enunciado}</h1>
      <ul>
        {questao?.respostas.map((r, i) => <li key={i}>{r}</li>)}
      </ul>
    </div>
  )
}