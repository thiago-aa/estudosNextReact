import Filho from "./Filho"

const falarComigo = (param1, param2, param3) => {
console.log(param1, param2, param3);
}

export default () => { 
 
  return (
    <>
      <Filho funcao={falarComigo} />
    </>
  )
}