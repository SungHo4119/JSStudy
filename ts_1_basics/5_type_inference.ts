/**
 * Type Inference
 *
 * 타입 추론
 */
// stringType: string으로 타입을 추론함.
let stringType = 'string';
let booleanType = true;
let numberType = 1;
let arrayType = [1, 2, 3]; // arrayType: number[]로 타입을 추론함.

//'string' 형식은 'boolean' 형식에 할당할 수 없습니다.ts(2322)
// booleanType = 'false';

// const constStringType: "const string" 타입으로 추정
const constStringType = 'const string'; // const로 선언된 변수는 타입을 추론하지 않음.
const constStringType2: 'const string' = 'const string';

/**
 * 아래 타입으로 추론함
 * let yuJin: {
    name: string;
    year: number;
}
 */
const yuJin = {
    name: '안유진',
    year: 2003,
};

const yuJin2 = {
    name: '안유진',
    year: 2003,
};

yuJin2.name = '코드팩토리';
console.log(yuJin2.name);

const yuJin3 = {
    name: '안유진' as const,
    year: 2003 as const,
};
// as const로 선언한 변수는 읽기만 가능,
console.log(yuJin3.name); // 타입의 추론은 안유진

/**
 * Array
 */
// number[]
let numbers = [1, 2, 3, 4];
// (number | string)[]
let numbersAndString = [1, 2, 3, '4'];

const number = numbers[0]; // number

const nos = numbersAndString[0]; // number | string

// tuple
// 튜플은 typeScript에서 길이를 알고있어서 위에 numbersAndString와 다르게 길이를 넘는 값을 참조할 수없다.
const twoNumbers = [1, 3] as const;

// tuple이기 때문에 변경하지못함
// twoNumbers[0] = 10;

const first = twoNumbers[0]; // 1
