import If from "../../components/If";

export default () => {
  const num = 3;
  return (
    <>
      <If test={num % 2 === 0}>
        <h1>
          O número {num} é par
        </h1>
      </If>
      <If test={num % 2 !== 0}>
        <h1>
          O número {num} é impar
        </h1>
      </If>
    </>
  )
}