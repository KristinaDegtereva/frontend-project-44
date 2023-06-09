import startGame from '../index.js';
import getRandomIntInclusive from '../utils.js';

const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calcAnswer = (num1, randOperator, num2) => {
  switch (randOperator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Unknown operators!');
  }
};

const startRounds = () => {
  const randOperator = operators[getRandomIntInclusive(0, 2)];

  const num1 = getRandomIntInclusive(1, 100);
  const num2 = getRandomIntInclusive(1, 100);

  const correctAnswer = String(calcAnswer(num1, randOperator, num2));
  const question = (`${num1} ${randOperator} ${num2}`);
  return [question, correctAnswer];
};

export default () => {
  startGame(rules, startRounds);
};
