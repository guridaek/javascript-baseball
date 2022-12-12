const QUERY = Object.freeze({
  USER_NUMBER: '숫자를 입력해주세요 : ',
  USER_COMMAND: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
});

const ERROR_MSG = Object.freeze({
  INVALID_USER_NUMBER_NOT_NUM: '1 ~ 9 사이의 숫자만 입력할 수 있습니다.',
  INVALID_USER_NUMBER_LENGTH: '3자리 숫자만 입력할 수 있습니다.',
  INVALID_USER_NUMBER_DUPLICATE: '중복이 없는 숫자만 입력할 수 있습니다.',
  INVALID_COMMAND: '1 or 2만 입력할 수 있습니다.',
});

module.exports = { QUERY, ERROR_MSG };
