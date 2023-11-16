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
  function onResponse(index: number) {
      if(props.question.notAnswered) {
        console.log("answer with no QuizQuestions: ", props.question.answerWith(index))
        props.answeredQuestion(props.question.answerWith(index));
      }
  }

  return (
    <div className={styles.quizQuestions}>
      {props.question ? 
        <Question 
          value={props.question} 
          timesUp={props.nextStep}
          timeToAnswer={6}
          onResponse={onResponse}
        />
        : false
      }
        <Button onCick={props.nextStep} text={props.lastQuestion ? 'Finalizar' : 'Próxima'}/>
    </div>
  )
}