/**
 * 타입 변환
 * Type Conversion
 *
 * 1) 명시적
 * 2) 암묵적? 묵시적
 */

let age = 32;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

// 암묵적
let test = age + '';
console.log(typeof test, test);
console.log('98' + 2);
console.log(+'98' + 2);
console.log('98' * 2);
console.log('98' - 2);
console.log('98' / 2);
console.log('98' % 2);

console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));

/**
 * Boolean 타입으로 변환
 */
console.log(!'x'); // false
console.log(!!'x'); // true
console.log(!!''); // false
console.log(!''); // true
console.log('---------');
console.log(!undefined); // true
console.log(!!undefined); // false
console.log(!null); // true
console.log(!!null); // false

console.log('---------');
console.log(!!{}); //true
console.log(!!{}); //true
