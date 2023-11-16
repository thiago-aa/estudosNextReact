export default () => {
  const listaAprovados = [
    'João',
    'Maria',
    'Ana',
    'Bia',
    'Carlos',
    'Daniel',
    'Laura'
  ]
  return (
    <ul>
      {listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)}
    </ul>
  )
}