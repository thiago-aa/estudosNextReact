export const getStaticProps = () => {
  return {
    props: {
      numero: Math.random()
    }
  }
}

export default props => {
  return (
    <div>
      <span>Aleatório: {props.numero}</span>
    </div>
  )
}