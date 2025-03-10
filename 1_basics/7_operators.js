/**
 * Operators
 * 연산자
 */
/**
 * 산술 연산자
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셉
 * 4) 나누셈
 * 5) 나머지
 */
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 * (10 + 10));
console.log('---------');

let number = 1;
number++;
console.log(number);
number--;
console.log(number);
console.log('---------');

let result = number++;
console.log(result, number);
result = number--;
console.log(result, number);

console.log('---------');

/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게 될까?
 */
let sample = '99';
console.log(+sample); // 99
console.log(typeof +sample); // number

console.log('---------');

console.log(sample); // 99
console.log(typeof sample); // string
console.log(sample + 1, +sample + 1); // 991 , 100
console.log('---------');
sample = true;

console.log(sample); // true
console.log(typeof sample); //boolean

console.log(+sample); // 1
console.log(typeof +sample); // number

console.log(sample + 1, +sample + 1); // 2, 2

console.log('---------');

sample = false;

console.log(sample); // fakse
console.log(typeof sample); //boolean

console.log(+sample); // 0
console.log(typeof +sample); // number

console.log(sample + 1, +sample + 1); // 1, 1
console.log('---------');

sample = '99';
console.log(-sample); // -99

sample = '안유진';
console.log(+sample); // NaN
console.log('---------');
/**
 * 할당 연산자 (assignment operator)
 */
number = 100;

number += 10;
console.log(number); // 110
console.log('---------');
/**
 * 비교 연산자
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

console.log('5' == 5); // true
console.log('5' === 5); // false
console.log(1 === true); // false

console.log('---------');

/**
 * 논리 연산자
 * 1) && : 둘 다참
 * 2) || : 하나라도 참
 */
console.log(true && true);
console.log(true && false);

console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log('---------');

/**
 * 단축 평가 (short circuit evaluation)
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ||를 사용했을때 좌측이 false면 우측 값 반환
 */

/**
 * 지수 연산자
 */

console.log(2 ** 2);
console.log(10 ** 2);

console.log('---------');

/**
 * null 연산자
 */
let name;
console.log(name); // undefind
name = name ?? '코팩';
console.log(name); // 코팩
name = name ?? '아이브';
console.log(name); // 코팩

let name2;
name2 ??= '코팩2';
console.log(name2); // 코팩2
