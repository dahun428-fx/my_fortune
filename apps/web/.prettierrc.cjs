// prettier.config.js
/** @type {import("prettier").Config} */
module.exports = {
  semi: false, // 세미콜론 제거
  singleQuote: true, // 작은따옴표 사용
  trailingComma: 'es5', // ES5에서 허용되는 곳에만 쉼표
  printWidth: 100, // 한 줄 최대 길이
  tabWidth: 2, // 들여쓰기 간격
  bracketSpacing: true, // 객체 리터럴 중괄호 사이 공백 추가
  arrowParens: 'avoid', // 화살표 함수 매개변수 괄호 생략
}
