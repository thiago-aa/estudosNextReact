import QuestionModel from '../model/question';
import Statement from './Statement';
import styles from '../styles/Question.module.css'
import Answer from './Answer';
import Timer from './MeuTimer';

interface QuestionProps {
  value: QuestionModel;
  onResponse: (index: number) => void;
  timesUp: (index: null) => void;
  timeToAnswer?: number;
}

const letters = [
  { letter: 'A', color: '#f2c866' },
  { letter: 'B', color: '#F266BA' },
  { letter: 'C', color: '#85D4F2' },
  { letter: 'D', color: '#BCE596' },
]

export default function Question(props: QuestionProps) {
  const question = props.value;
  const renderAnswers = () => question.answers.map((answer, i) => (
      <Answer 
        index={i} 
        key={`${question.id}-${i}`} 
        letter={letters[i].letter}
        value={answer} 
        backgroundLetterColor={letters[i].color}
        onResponse={props.onResponse}
      />
    )
  )
  
  return (
    <div className={styles.question}>
      <Statement text={question.statement}/>
      <Timer duration={ props.timeToAnswer ?? 10} timesUp={() => props.timesUp(null)} key={question.id}/>
      {renderAnswers()}
    </div>
  )
}