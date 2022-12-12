const { Console } = require('@woowacourse/mission-utils');
const BaseballGame = require('./BaseballGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class BaseballGameController {
  #baseballGame;

  constructor() {
    this.#baseballGame = new BaseballGame();
  }

  start() {
    OutputView.printIntro();
    this.inputUserNumber();
  }

  inputUserNumber() {
    InputView.readUserNumber(userNumber => {
      OutputView.printHint(
        this.#baseballGame.getBallCount(userNumber),
        this.#baseballGame.getStrikeCount(userNumber),
      );
      if (this.#baseballGame.getStrikeCount(userNumber) < 3) this.inputUserNumber();
      else this.inputUserCommand();
    });
  }

  inputUserCommand() {
    InputView.readUserCommand(command => {
      if (command === '1') this.restartGame();
      if (command === '2') Console.close();
    });
  }

  restartGame() {
    this.#baseballGame.resetAnswerNumber();
    this.inputUserNumber();
  }
}

module.exports = BaseballGameController;
