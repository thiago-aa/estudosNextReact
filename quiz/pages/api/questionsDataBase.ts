import AnswerModel from "../../model/answer";
import QuestionModel from "../../model/question";

const questions: QuestionModel[] = [
  new QuestionModel(1, 'Qual o nome do animal que transmite a Doença de Chagas?', [
    AnswerModel.generateWrongAnswer('Abelha'),
    AnswerModel.generateWrongAnswer('Barata'),
    AnswerModel.generateWrongAnswer('Pulga'),
    AnswerModel.generateRightAnswer('Barbeiro'),
  ]),
  new QuestionModel(2, 'Qual é a capital do Brasil?', [
    AnswerModel.generateWrongAnswer('Buenos Aires'),
    AnswerModel.generateWrongAnswer('Lima'),
    AnswerModel.generateWrongAnswer('Montevidéu'),
    AnswerModel.generateRightAnswer('Brasília'),
  ]),
  new QuestionModel(3, 'Quantos planetas existem em nosso sistema solar?', [
    AnswerModel.generateWrongAnswer('6'),
    AnswerModel.generateWrongAnswer('9'),
    AnswerModel.generateWrongAnswer('10'),
    AnswerModel.generateRightAnswer('8'),
  ]),
  new QuestionModel(4, 'Qual é o maior mamífero do mundo?', [
    AnswerModel.generateWrongAnswer('Elefante'),
    AnswerModel.generateWrongAnswer('Girafa'),
    AnswerModel.generateWrongAnswer('Hipopótamo'),
    AnswerModel.generateRightAnswer('Baleia Azul'),
  ]),
  new QuestionModel(5, 'Em que ano ocorreu a Independência do Brasil?', [
    AnswerModel.generateWrongAnswer('1800'),
    AnswerModel.generateWrongAnswer('1823'),
    AnswerModel.generateWrongAnswer('1845'),
    AnswerModel.generateRightAnswer('1822'),
  ]),
  new QuestionModel(6, 'Quem escreveu a peça "Romeu e Julieta"?', [
    AnswerModel.generateWrongAnswer('Charles Dickens'),
    AnswerModel.generateWrongAnswer('William Faulkner'),
    AnswerModel.generateWrongAnswer('Jane Austen'),
    AnswerModel.generateRightAnswer('William Shakespeare'),
  ]),
  new QuestionModel(7, 'Qual é a maior cordilheira do mundo?', [
    AnswerModel.generateWrongAnswer('Himalaias'),
    AnswerModel.generateWrongAnswer('Alpes'),
    AnswerModel.generateWrongAnswer('Monte Everest'),
    AnswerModel.generateRightAnswer('Andes'),
  ]),
  new QuestionModel(8, 'Quem pintou a Mona Lisa?', [
    AnswerModel.generateWrongAnswer('Vincent van Gogh'),
    AnswerModel.generateWrongAnswer('Pablo Picasso'),
    AnswerModel.generateWrongAnswer('Claude Monet'),
    AnswerModel.generateRightAnswer('Leonardo da Vinci'),
  ]),
  new QuestionModel(9, 'Qual é a velocidade da luz?', [
    AnswerModel.generateWrongAnswer('300,000 km/s'),
    AnswerModel.generateWrongAnswer('400,000 km/s'),
    AnswerModel.generateWrongAnswer('500,000 km/s'),
    AnswerModel.generateRightAnswer('299,792 km/s'),
  ]),
  new QuestionModel(10, 'Quem foi o primeiro presidente dos Estados Unidos?', [
    AnswerModel.generateWrongAnswer('John Adams'),
    AnswerModel.generateWrongAnswer('Thomas Jefferson'),
    AnswerModel.generateWrongAnswer('James Madison'),
    AnswerModel.generateRightAnswer('George Washington'),
  ]),
];

export default questions;
