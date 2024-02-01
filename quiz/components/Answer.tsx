import AnswerModel from "../model/answer"
import styles from '../styles/Answer.module.css'

interface AnswerProps {
  value: AnswerModel
  index: number
  letter: string
  backgroundLetterColor: string
  onResponse: (index: number) => void
}

export default function Answer(props: AnswerProps) {
  const answer = props.value;
  const revealedAnswer = answer.revealed ? styles.revealedAnswer : '';

  return (
    <div className={styles.answer} onClick={() => props.onResponse(props.index)}>
      <div className={`${revealedAnswer} ${styles.answerContent}`}>
        <div className={styles.front}>
          <div className={styles.letter} style={{backgroundColor: props.backgroundLetterColor}}>
            {props.letter}
          </div>
          <div className={styles.value}>
            {answer.value}
          </div>
        </div>
        <div className={styles.verse}>
            {
              answer.right && answer.timesUp ? (
              <div className={styles.wrong}>
                <div>Tempo esgotado, a resposta certa é...</div>
                <div className={styles.value}>{answer.value}</div>
              </div>
            ) : answer.right ? (
              <div className={styles.right}>
              <div>A resposta certa é...</div>
              <div className={styles.value}>{answer.value}</div>
            </div>
            ) : (
              <div className={styles.wrong}>
                <div>A resposta informada está errada...</div>
                <div className={styles.value}>{answer.value}</div>
              </div>
          ) }
        </div>   
      </div>
    </div>
  )
}