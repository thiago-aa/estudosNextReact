import Square from "./Square";

export default () => {
  const squares = [];
  let isEven, isBorder, aux = 0;
  for (let i = 0; i < 64; i++) {
    isBorder = (i+1) % 8 === 0; // Confere se é uma casa da borda
    isEven = aux % 2 === 0; // Se aux for par ou zero a casa é branca, caso contrário, preta
    squares.push(<Square key={i} isEven={isEven}/>);
    aux = isBorder ? aux : aux + 1; // Se for uma casa da borda aux = aux, para manter mesma na cor da casa na próxima linha , se não é somado +1, para inverter a cor
  }
  return (
    <div className="board">
      {squares}
    </div>
  );
}