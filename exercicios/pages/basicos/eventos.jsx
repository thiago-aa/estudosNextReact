export default () => {
  function text(text) {
    console.log(text);
  }

  function acao1() {
    console.log('Ação #1');
  }

  const handleClick = e => e.altKey ? alert("Clicou segurando o alt") : alert("Não clicou segurando o alt");

  const texto = 'texto na const';
  return (
    <>
      <button onClick={() => alert('alerta, vc foi alertado')}>Botão Alerta</button>
      <button onClick={acao1}>Ação #1</button>
      <button onClick={() => text(texto)}>Texto</button>
      <button onClick={e => handleClick(e)}>Clicou segurando o Alt?</button>
      <br />
      <br />
      <input type="text" onChange={e => console.log(e.target.value)} />
    </>
  )
  }