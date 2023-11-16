import { useState } from "react";

const container = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  color: 'white',
  backgroundColor: '#333',
}

const buttonStyle = {
  height: '25px',
  width: '50px',
  fontSize: '20px',
}


export default () => {
  const [counter, setCounter] = useState(0);
  const [passo, setPasso] = useState(1);
  const [inputVal, setInputVal] = useState();

  const countUp = () => setCounter(counter+passo);
  const countDown = () => setCounter(counter-passo);
  const handleInput = e => setInputVal(e.target.value);
  const handlePasso = () => setPasso(parseInt(inputVal));
  
  return (
    <div style={container}>
      <h1>Contador</h1>
      <br />
      <label htmlFor="passo">Passo do contador (padrão: 1)</label>
      <div>
        <input type="text" id="passo" value={inputVal} onChange={handleInput}/>
        <button style={{buttonStyle, width: 'auto'}} onClick={handlePasso}>Definir</button>
      </div>
      <br />
      <h2>{counter}</h2>
      <br />
      <div>
        <button style={buttonStyle} onClick={countDown}>-</button>
        <button style={buttonStyle} onClick={countUp}>+</button> 
      </div>
    </div>
  )
}