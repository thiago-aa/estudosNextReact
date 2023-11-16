export default prop => {
  const {num} = prop;

  return num % 2 === 0 ? <p>{num}</p> : null;
}