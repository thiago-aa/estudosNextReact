import styles from "../styles/Door.module.css"
import DoorModel from "../model/door"
import Gift from "./Gift"

interface Door {
  value: DoorModel,
  onChange: (newDoor: DoorModel) => void
}

export default function Door(props) {
  const door = props.value;
  const selected = door.selected && !door.open ? styles.selected : '';
  
  const toggleSelect = e => props.onChange(door.toggleSelect());
  const toOpen = e => {
    e.stopPropagation();
    return props.onChange(door.toOpen());
  } 

  const renderDoor  = () => (
    <div className={styles.door}>
      <div className={styles.number}>{door.num}</div>
      <div className={styles.knob} onClick={toOpen}></div>
    </div>
  )
  return (
    <div className={styles.area} onClick={toggleSelect}>
      <div className={`${styles.frame} ${selected}`}>
        {
          door.closed ? 
            renderDoor() : 
            door.gift ? <Gift/> :false
        }
      </div>
      <div className={styles.floor}></div>
    </div>
  )
}