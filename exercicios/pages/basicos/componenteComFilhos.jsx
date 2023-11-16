import ItemLista from "../../components/ItemLista"
import Lista from "../../components/Lista"

export default () => {
  return(
    <>
      <Lista>
        <ItemLista conteudo="Item 1"/>
        <ItemLista conteudo="Item 2"/>
        <ItemLista conteudo="Item 3"/>
        <ItemLista conteudo="Item 4"/>
        <ItemLista conteudo="Item 5"/>
      </Lista>
    </>
  )
}