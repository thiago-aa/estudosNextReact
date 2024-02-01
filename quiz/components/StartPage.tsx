import Button from "./Button";
import styles from "../styles/StartPage.module.css"

interface StartPageInterface {
  start: (boolean) => void;
}

export function StartPage(props: StartPageInterface) {
  return (
    <div className={styles.startPageContainer}>
      <h1>Bem vindo(a), para iniciar o Quiz, clique no botão abaixo</h1>
      <Button text="Iniciar" onCick={() => props.start(true)}/>
    </div>
  )
}