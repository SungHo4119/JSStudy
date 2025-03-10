/**
 * Hoisting
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것 처럼 느껴지는 현상을 이야기한다.
 */
console.log('Hello');
console.log('World');

console.log(name);
var name = '코드팩토리';
console.log(name);

console.log(yuJin);
let yuJin = '코드팩토리';

// 초기화 후 발생하는 오류 ( ReferenceError: Cannot access 'yuJin' before initialization )
console.log(yuJin);
// 없는 변수를 참조했을때 오류 : ReferenceError: yuJin is not defined

console.log(ive);
const ive = '아이브';
console.log(ive);
