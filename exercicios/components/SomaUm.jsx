export default props => {
  props.numero++;
  return (
    <div>
      <h1>{props.numero}</h1>
    </div>
  )
}