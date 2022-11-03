const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.targetNumber = [];
    this.userNumber = [];
    this.ball = 0;
    this.strike = 0;
  }

  resetTargetNumber() {
    this.targetNumber = [];
    while (this.targetNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.targetNumber.includes(number)) {
        this.targetNumber.push(number);
      }
    }
  }

  getUserNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      this.userNumber = answer.split('').map(Number);

      if (this.userNumber.includes(NaN) || new Set(this.userNumber).size !== 3) {
        throw 'Invalid input';
      }
    });
  }

  calcResult() {
    this.ball = 0;
    this.strike = 0;
    for (let i = 0; i < this.targetNumber.length; i++) {
      const idx = this.userNumber.indexOf(this.targetNumber[i]);

      if (idx === i) {
        this.strike += 1;
      } else if (idx !== -1) {
        this.ball += 1;
      }
    }
  }

  play() {
    this.resetTargetNumber();
    this.getUserNumber();
    this.calcResult();
  }
}

module.exports = App;
