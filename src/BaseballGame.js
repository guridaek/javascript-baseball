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

  getStrikeCount(userNumber) {
    let count = 0;
    const numbers = userNumber.split('').map(Number);
    numbers.forEach((number, idx) => {
      if (number === this.#answerNumber[idx]) {
        count += 1;
      }
    });

    return count;
  }
}

module.exports = BaseballGame;
