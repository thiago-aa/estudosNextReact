import QuestionModel from '../model/question';
import styles from '../styles/QuizQuestions.module.css';
import Question from './Question';
import Button from './Button';

interface QuizQuestionProps {
  question: QuestionModel;
  lastQuestion: boolean;
  answeredQuestion: (question: QuestionModel) => void;
  nextStep: () => void;
}

export default function QuizQuestions(props: QuizQuestionProps) {
  function onResponse(index: number | null) {
      if(props.question.notAnswered) {
        if(index !== null) {
          props.answeredQuestion(props.question.answerWith(index));
        } else {
          props.answeredQuestion(props.question.answerWith(null));
        }
      }
  }

  return (
    <div className={styles.quizQuestions}>
      {props.question ? 
        <Question 
          value={props.question} 
          timesUp={onResponse}
          timeToAnswer={4}
          onResponse={onResponse}
        />
        : false
      }
        <Button onCick={props.nextStep} text={props.lastQuestion ? 'Finalizar' : 'Próxima'}/>
    </div>
  )
}