import styles from '../styles/Stats.module.css';

interface StatsProps {
  label: string;
  value: any;
  backgroundColor?: string;
  fontColor?: string;
}

export default function Stats(props: StatsProps) {
  const {label, value} = props;
  return (
    <div className={styles.stats}>
      <div className={styles.value} style={{
        backgroundColor: props.backgroundColor ?? '#FDD60F',
        color: props.fontColor?? '#333'
      }}>
       {value} 
      </div>
      <div className={styles.label}>
        {label}
      </div>
    </div>
  )
}