/**
 * conpy by value 값에 의한 전달
 * conpy by reference 참조에 의한 전달
 *
 * 1) 기본적으로 모든 primitive 값은 copy by value다
 * 2) 객체는 copy by reference다.
 */

let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 안유진 입니다.';
console.log('------------');
console.log(original);
console.log(clone);

let originalObject = {
    name: '안유진',
    group: '아이브',
};
let cloneObject = originalObject;
console.log(originalObject);
console.log(cloneObject);

console.log('-------------');
cloneObject['test'] = 'test';
console.log(originalObject);
console.log(cloneObject);

console.log(originalObject === cloneObject); // true
console.log(original === clone); // false

originalObject = {
    name: '안유진',
    group: '아이브',
};
cloneObject = {
    name: '안유진',
    group: '아이브',
};
console.log(originalObject === cloneObject); // false

const yujin1 = {
    name: '안유진',
    group: '아이브',
};

const yujin2 = yujin1;

const yujin3 = {
    name: '안유진',
    group: '아이브',
};

console.log(yujin1 === yujin2); //true
console.log(yujin2 === yujin3); // false
console.log(yujin3 === yujin1); // false

/**
 * Spread Operator
 * 위치가 중요하다
 */
const yuJin4 = {
    ...yujin3,
};
console.log(yuJin4 === yujin3); // false

const yuJin5 = {
    year: 2025,
    ...yujin3,
};
console.log(yuJin5);
console.log('-----------');
// 순서 중요하다.
const yuJin6 = {
    name: '코드펙토리',
    ...yujin3,
};
console.log(yuJin6);
const yuJin7 = {
    ...yujin3,
    name: '코드펙토리',
};
console.log(yuJin7);
