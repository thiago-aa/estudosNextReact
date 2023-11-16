import questions from "../questionsDataBase"
import shuffle from "../../../functions/shuffle";

export default function handler(req, res){
  res.status(200).json(shuffle(questions.map(question => question.id)));
}