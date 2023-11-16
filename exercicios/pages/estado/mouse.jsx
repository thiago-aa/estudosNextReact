import { useState } from "react";

export default () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouse = e => {
    console.log(e);
    setY(e.clientY);
    setX(e.clientX);
  }

  const container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    color: 'white',
    backgroundColor: '#333',
  }

  return (
    <div style={container} onMouseMove={handleMouse}>
      <span>Eixo x: {x}</span>
      <span>Eixo y: {y}</span>
    </div>
  )
}