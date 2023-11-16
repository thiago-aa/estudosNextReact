import Estilo from "@/components/Estilo"

export default () => {
  return (
    <div>
      <Estilo color="#eee" num={-1} classe="redBorder"/>
      <br />
      <br />
      <br />
      <Estilo color="#000" num={5} direita classe="blueBorder"/>
    </div>
    )
  }