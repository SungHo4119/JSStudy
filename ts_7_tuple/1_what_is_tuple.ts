/**
 * Tuple
 */
let iveTopMenbers: string[] = ['안유진', '장원영', '레이'];

let numberAndStringTuple: [number, string] = [1, '안유진'];

numberAndStringTuple.push('아이유');

console.log(numberAndStringTuple); // [1, '안유진', '아이유']

let unmodifiableTuple: readonly [number, string] = [1, '안유진'];

// unmodifiableTuple.push('아이유'); // 'readonly [number, string]' 형식에 'push' 속성이 없습니다.ts(2339)

// Tuple 유추하기
let actresses = ['안유진', '장원영', '레이'];

let actressesTupleConst = ['안유진', '장원영', '레이'] as const; // readonly ['안유진', '장원영', '레이']

let stringArray: string[] = [...actresses, ...actressesTupleConst]; // string[]

/**
 * Named Tuple
 */
const namedTuple: [name: string, age: number] = ['안유진', 20];
const [name, age] = namedTuple;
console.log(name); // '안유진'
console.log(age); // 20

// '[name: string, age: number]' 형식에 'name' 속성이 없습니다.ts(2339)
// console.log(namedTuple.name);

/**
 * Assigning tuple to tuple
 * tuple은 같은 타입끼리만 할당이 가능하다.
 */
const tuple1: [number, number] = [1, 2];
const tuple2: [string, string] = ['안유진', '장원영'];

// '[number, number]' 형식은 '[boolean, boolean]' 형식에 할당할 수 없습니다.
//   소스의 0 위치에 있는 형식이 대상의 0 위치에 있는 형식과 호환되지 않습니다.
//     'number' 형식은 'boolean' 형식에 할당할 수 없습니다.ts(2322)
// let tuple3: [boolean, boolean] = tuple1;

/**
 * Tuple과 Array의 관계
 */
let ive: [string, string] = ['안유진', '장원영'];
let array: string[] = ['안유진', '장원영'];

let stringArr: string[] = ive;
// 'string[]' 형식은 '[string, string]' 형식에 할당할 수 없습니다.
//   대상에 2개 요소가 필요하지만, 소스에 더 적게 있을 수 있습니다.ts(2322)
// let ive2: [string, string] = stringArr;

/**
 * Multi Dimesional Tuple
 */
const tuple2D: [string, number][] = [
    ['안유진', 10],
    ['장원영', 22],
];
