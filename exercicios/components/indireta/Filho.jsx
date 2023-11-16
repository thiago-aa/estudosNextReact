export default props => {
  
  return (
    <>
      <button onClick={props.funcao}>Falar com o pai #01</button>
      <button onClick={() => props.funcao('falei uma paradinha, ', 'outra ', 'e mais uma')}>Falar com o pai #02</button>
    </>
  )
}