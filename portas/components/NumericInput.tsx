import styles from '../styles/NumericInput.module.css'

interface NumericInputProps {
  value: number;
  text: string;
  handleValue: (newValue: number) => void;
}

export default function NumericInput(props: NumericInputProps) {
  const inc = () => props.handleValue(+props.value + 1)  
  const dec = () => props.handleValue(+props.value - 1) 

  return (
    <div className={styles.container}>
      <span className={styles.text}>{props.text}</span>
      <span className={styles.value}>{props.value}</span>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={dec}>-</button>
        <button className={styles.button} onClick={inc}>+</button>
      </div>
    </div>
  )
}