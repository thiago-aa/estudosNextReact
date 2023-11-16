import { useState } from "react";
export default () => {
  const [nums, setNums] = useState([' ', ' ', ' ', ' ', ' ', ' ']);

  const raffle = () => {
    const checkRepetion = (arr, cNum) => {
      return arr.length === 0 ? false : arr.includes(cNum);
    }

    const arrAux = [];
    let num;
    for(let i = 0; i<6; i++) {
      do {
        num = Math.floor(Math.random() * 60) + 1;
      } while(checkRepetion(arrAux, num))
      arrAux.push(num);
    }
    setNums(arrAux);
  }

  return (
    <div className="numMegaContainer">
      {nums.map((num, index) => <div className="numMega" key={index}>{num}</div>)}
      <button onClick={raffle}>Sortear</button>
    </div>
  )
}