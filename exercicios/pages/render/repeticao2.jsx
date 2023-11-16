import listaProdutos from '../../data/produtos';

export default () => {
  const comBorda = {
    border: '1px black solid'
  }
  const  renderProdutos = () => listaProdutos.map(produto => (
        <tr key={produto.id}>
          <td style={comBorda}>{produto.id}</td>
          <td style={comBorda}>{produto.nome}</td>
          <td style={comBorda}>{produto.preco}</td>
        </tr>
      )
    )
  
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {renderProdutos()}
        </tbody>
      </table>
    </div>
  )
  
}