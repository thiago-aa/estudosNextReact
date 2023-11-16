import { useRouter } from "next/router"
import styles from '../styles/Results.module.css'
import Stats from "../components/Stats";
import Button from "../components/Button";

export default function Results() {

  const router = useRouter();
  const total = +router.query.total;
  const rightAnswers = +router.query.rightAnswers;
  const percentage = Math.round((rightAnswers/total) * 100)

  return (
    <div className={styles.stats}>
      <h1>Resultados</h1>
      <div style={{display: 'flex'}}>
        <Stats label='Total' value={total}/>
        <Stats label='Acertos' value={rightAnswers} backgroundColor="#9CD2A4"/>
        <Stats label='Porcentagem' value={`${percentage}%`} backgroundColor="#DE6A33"/>
      </div>
      <Button href="/" text="Tentar Novamente"/>
    </div>
  
  )
}