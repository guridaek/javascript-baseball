const { Random } = require('@woowacourse/mission-utils');

class BaseballGame {
  #answerNumber;

  constructor() {
    this.resetAnswerNumber();
  }

  resetAnswerNumber() {
    const numbers = new Set();
    while (numbers.size < 3) {
      numbers.add(Random.pickNumberInRange(1, 9));
    }
    this.#answerNumber = Array.from(numbers);
  }
}

module.exports = BaseballGame;
