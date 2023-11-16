import styles from "../../../styles/Game.module.css"
import Door from "../../../components/Door";
import { createDoors, updateDoors } from "../../../functions/doors";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";


export default function Game() {
  const router = useRouter();
  const [doors, setDoors] = useState([]);

  useEffect( () => {
    const doorsNum = +router.query.doors;
    const haveGift = +router.query.haveGift;
    setDoors(createDoors(doorsNum, haveGift))
  },[router.query])
  
  const renderPortas = () => {
    return doors.map((door, i) => <Door key={door.num} value={door} onChange={ newDoor => setDoors(updateDoors(newDoor, doors))}/>)
  }
  return (
    <div className={styles.game}>      
      <div className={styles.doors}>
        {renderPortas()}
      </div>
      <div className={styles.button}>
        <Link href='../../'>
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  )
}
