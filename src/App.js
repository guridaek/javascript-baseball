const BaseballGameController = require('./BaseballGameController');

class App {
  #baseballGameController = new BaseballGameController();

  play() {
    this.#baseballGameController.start();
  }
}

module.exports = App;
