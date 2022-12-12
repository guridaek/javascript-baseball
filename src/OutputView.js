const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printHint(ballCount, strikeCount) {
    let hint = '';
    if (ballCount > 0) hint += `${ballCount}볼 `;
    if (strikeCount > 0) hint += `${strikeCount}스트라이크`;
    if (hint === '') hint = '낫싱';

    Console.print(hint.trim());
  },
};

module.exports = OutputView;
