const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printIntro() {
    Console.print('숫자 야구 게임을 시작합니다.');
  },

  printHint(ballCount, strikeCount) {
    let hint = '';
    if (ballCount > 0) hint += `${ballCount}볼 `;
    if (strikeCount > 0) hint += `${strikeCount}스트라이크`;
    if (hint === '') hint = '낫싱';
    if (strikeCount === 3) hint += '\n3개의 숫자를 모두 맞히셨습니다! 게임 종료';

    Console.print(hint.trim());
  },
};

module.exports = OutputView;
