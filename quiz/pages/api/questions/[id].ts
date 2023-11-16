// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import questions from "../questionsDataBase"
export default function handler(req, res) {
  const questionId = +req.query.id;
  const searchedQuestion = questions.filter( question => question.id === questionId);
  if (searchedQuestion.length === 1) {
    const selectedQuestion = searchedQuestion[0].shuffleAnswers();
    const obj = selectedQuestion.toObject();
    res.status(200).json(
      obj
    )
  } else {
    res.status(204).send();
  }
}
