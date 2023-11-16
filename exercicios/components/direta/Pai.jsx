import Filho from "./Filho"

export default props => (
  <>
    <h1>Família {props.familia}</h1>
    <Filho familia={props.familia} nome='Luiz'/>
    <Filho familia={props.familia} nome='Carlos'/>
    <Filho {...props} nome='Luiza'/>
  </>
)