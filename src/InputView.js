const { Console } = require('@woowacourse/mission-utils');
const { QUERY, ERROR_MSG } = require('./Constants');

const InputView = {
  readUserNumber(callback) {
    Console.readLine(QUERY.USER_NUMBER, input => {
      this.validateUserNumber(input);
      callback(input);
    });
  },

  readUserCommand(callback) {
    Console.readLine(QUERY.USER_COMMAND, input => {
      this.validateUserCommand(input);
      callback(input);
    });
  },

  validateUserNumber(number) {
    const numbers = number.split('').map(Number);
    if (numbers.includes(0) || numbers.includes(NaN)) {
      throw new Error(ERROR_MSG.INVALID_USER_NUMBER_NOT_NUM);
    }
    if (numbers.length !== 3) {
      throw new Error(ERROR_MSG.INVALID_USER_NUMBER_LENGTH);
    }
    if (new Set(numbers).size !== 3) {
      throw new Error(ERROR_MSG.INVALID_USER_NUMBER_DUPLICATE);
    }
  },

  validateUserCommand(command) {
    if (['1', '2'].includes(command) === false) {
      throw new Error(ERROR_MSG.INVALID_COMMAND);
    }
  },
};

module.exports = InputView;
