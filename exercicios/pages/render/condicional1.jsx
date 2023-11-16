import ApenasPar from "../../components/ApenasPar"

export default () => {
  const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 12451, 34236];
  return numList.map((item, i) => <ApenasPar key={i} num={item}/>);
}