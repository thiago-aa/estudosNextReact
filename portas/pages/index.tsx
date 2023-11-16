import { useState } from "react";
import Card from "../components/Card";
import NumericInput from "../components/NumericInput";
import styles from "../styles/Form.module.css"
import Link from "next/link";


export default function Home() {
  const [doorsQtde, setDoorsQtde] = useState(3);
  const [giftNum, setGiftNum] = useState(1);


  return (
    <div className={styles.form}>
      <div>
        <Card bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumericInput text="Número de Portas" value={doorsQtde} handleValue={num => setDoorsQtde(num)}/>
        </Card>
      </div>
      <div>
        <Card>
          <NumericInput text="Porta Premiada" value={giftNum} handleValue={num => setGiftNum(num)}/>
        </Card>
        <Card bgColor="#28a085">
          <Link href={`/game/${doorsQtde}/${giftNum}`} className={styles.link}>
            <h2>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
