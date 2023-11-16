import AnswerModel from "./answer";
import shuffle from "../functions/shuffle";

export default class QuestionModel {
  #id: number;
  #statement: string;
  #answers: AnswerModel[];
  #right: boolean;
 

  constructor(id: number, statement: string, answers: AnswerModel[], right = false) {
    this.#id = id;
    this.#statement = statement;
    this.#answers = answers;
    this.#right = right;
  }

  get id() {
    return this.#id;
  }
  
  get statement() {
    return this.#statement;
  }
  
  get answers() {
    return this.#answers;
  }
  
  get right() {
    return this.#right;
  }

  get answered() {
    for(let answer of this.#answers) {
      if(answer.revealed) return true;
    }
    return false;
  }

  get notAnswered() {
    return !this.answered;
  }

  shuffleAnswers(): QuestionModel {
    let answersShuffled = shuffle(this.answers);
    return new QuestionModel(this.#id, this.#statement, answersShuffled, this.#right);
  }

  answerWith(index: number): QuestionModel {
    const gotItRight = this.#answers[index]?.right;
    const newAnswers = this.#answers.map((ans, i) => {
      const selectedAnswer = index === i;
      const mustReveal = selectedAnswer || ans.right;
      return mustReveal ? ans.reveal() : ans;
    })
    const newQuestion = new QuestionModel(this.id, this.statement, newAnswers, gotItRight);
    return newQuestion;
  }

  static generateModelFromObj(obj: QuestionModel): QuestionModel {
    const answers = obj.answers.map(resp => AnswerModel.convertObjToModel(resp));
    return new QuestionModel(obj.id, obj.statement, answers, obj.right);
  }

  toObject() {
    return {
      id: this.#id,
      statement: this.#statement,
      right: this.#right,
      answered: this.answered,
      answers: this.answers.map(res => res.toObject())
    }
  }
}