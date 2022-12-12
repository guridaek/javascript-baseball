const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readUserNumber(callback) {
    Console.readLine('숫자를 입력해주세요 : ', input => {
      this.validateUserNumber(input);
      callback(input);
    });
  },

  readUserCommand(callback) {
    Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', input => {
      this.validateUserCommand(input);
      callback(input);
    });
  },

  validateUserNumber(number) {
    const numbers = number.split('').map(Number);
    if (numbers.includes(0) || numbers.includes(NaN)) {
      throw new Error('올바르지 않은 입력입니다.');
    }
    if (new Set(numbers).size !== 3) {
      throw new Error('중복된 숫자를 입력했습니다.');
    }
  },

  validateUserCommand(command) {
    if (['1', '2'].includes(command) === false) {
      throw new Error('1 or 2 이외의 입력입니다.');
    }
  },
};

module.exports = InputView;
