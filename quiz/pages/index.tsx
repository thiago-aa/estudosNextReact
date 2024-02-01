import QuizQuestions from '../components/QuizQuestions'
import QuestionModel from '../model/question'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Button from '../components/Button';
import { StartPage } from '../components/StartPage';

export default function Home() {
  const router = useRouter();
  const [question, setQuestion] = useState<any>();
  const [questionsIDs, setQuestionsIDs] = useState<number[]>([]);
  const [rightAnswersCounter, setRightAnswersCounter] = useState<number>(0);
  const [start, setStart] = useState<boolean>(false);

  const BASE_URL = 'https://quiz-five-gray.vercel.app/api';

  async function loadQuestionsIDs() {
    const resp = await fetch(`${BASE_URL}/quiz`);
    const json = await resp.json();
    setQuestionsIDs(json);
  }

  async function loadQuestion(questionID: number) {
    const resp = await fetch(`${BASE_URL}/questions/${questionID}`);
    const json = await resp.json();
    const newQuestion = QuestionModel.generateModelFromObj(json);
    setQuestion(newQuestion);
  }

  useEffect(() => {
    loadQuestionsIDs();
  }, [])

  useEffect(() => {
    questionsIDs.length > 0 && loadQuestion(questionsIDs[0]);
  }, [questionsIDs])

  function answeredQuestion(answer: QuestionModel) {
    setQuestion(answer);
    const gotItRight = answer.right;
    setRightAnswersCounter(rightAnswersCounter + (gotItRight ? 1 : 0));
  }

  function getNextQuestionID() {
      const nextIndex = questionsIDs.indexOf(question.id) + 1
      return questionsIDs[nextIndex];
  }
  
  function nextStep() {
    const nextID = getNextQuestionID();
    return nextID ? nextQuestion(nextID) : finish()
  }

  function nextQuestion(nextID: number) {
    loadQuestion(nextID)
  }

  function finish() {
    router.push({
      pathname: '/results',
      query: {
        total: questionsIDs.length,
        rightAnswers: rightAnswersCounter
      }
    });
  }

  return !start ? (  
    <StartPage start={setStart}/>
  ) : question ? (
      <QuizQuestions 
        question={question}
        lastQuestion={getNextQuestionID() === undefined}
        answeredQuestion={answeredQuestion}
        nextStep={nextStep}
      />
  ) : false
}
