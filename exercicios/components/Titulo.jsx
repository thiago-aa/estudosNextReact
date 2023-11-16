export default (props) => {
  const {titulo, subtitulo, grande} = props;
  return (
    grande ?
      <>
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
      </>
    :
      <>
        <p>{titulo}</p>
        <p>{subtitulo}</p>
      </>
  )
}
