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
    InputView.readUserNumber(input => {
      OutputView.printHint(
        this.#baseballGame.getBallCount(input),
        this.#baseballGame.getStrikeCount(input),
      );
    });

    if (this.#baseballGame.getStrikeCount(input) < 3) this.inputUserNumber();
    else this.inputUserCommand();
  }

  inputUserCommand() {}
}

module.exports = BaseballGameController;
