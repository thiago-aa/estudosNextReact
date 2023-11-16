export default props => {
  const {num, direita, color, classe} = props;
  return (
    <div>
      <h1 style={{
        backgroundColor: num >= 0 ? "#2D2" : "#D22",
        color,
        textAlign: direita ? "right" : "left"
      }}>
        TEXTO #1
      </h1>
      <h2 className={classe}>
        TEXTO #2
      </h2>
    </div>
  )
}