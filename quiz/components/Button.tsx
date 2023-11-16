import Link from 'next/link';
import styles from '../styles/Button.module.css'

interface ButtonProps {
  text: string;
  href?: string;
  onCick?: (e: any) => void;
}

export default function Button(props: ButtonProps) {
  
const renderButton = () => (
  <button className={styles.button} onClick={props.onCick}>  
    {props.text}
  </button>
)

  return props.href ? (
    <Link href={props.href}>
      {renderButton()}
    </Link>
  ) : renderButton()
}