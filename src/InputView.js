const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readUserNumber(callback) {
    Console.readLine('숫자를 입력해주세요 : ', input => {
      this.validateUserNumber(input);
      callback(input);
    });
  },

  validateUserNumber(number) {
    const numbers = number.split('').map(Number);
    if (numbers.includes(0) || numbers.includes(NaN)) {
      throw new Error('올바르지 않은 입력입니다.');
    }
    if (new Set(numbers).size < 3) {
      throw new Error('중복된 숫자를 입력했습니다.');
    }
  },
};

module.exports = InputView;
