export default class AnswerModel {
  #value: string;
  #right: boolean;
  #revealed: boolean;

  constructor(value: string, right: boolean, revealed = false) {
    this.#value = value;
    this.#right = right;
    this.#revealed = revealed;
  }

  static generateRightAnswer(value: string) {
   return new AnswerModel(value, true);
  }

  static generateWrongAnswer(value: string) {
    return new AnswerModel(value, false);
  }

  get value() {
    return this.#value;
  }
  
  get right() {
    return this.#right;
  }
  
  get revealed() {
    return this.#revealed;
  }

  reveal() {
    return new AnswerModel(this.#value, this.#right, true);
  }

  static convertObjToModel(obj: AnswerModel) : AnswerModel {
    return new AnswerModel(obj.value, obj.right, obj.revealed);
  }

  toObject() {
    return {
      value: this.#value,
      right: this.#right,
      revealed: this.#revealed  
    }
  }
}