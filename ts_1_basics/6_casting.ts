/**
 * Casting
 * TS에서 Casting을 하면 JS에서 적용이 안된다.
 */

const codeFactory = 'code factory';
const testNumber = 3;

console.log(codeFactory.toUpperCase());

let sampleNumber: any = 5;
console.log(sampleNumber.toUpperCase());

console.log(sampleNumber as string);
let stringVar = sampleNumber as string;

// 백날 casting 해봐야 타입은 number이다.
console.log(typeof (sampleNumber as string)); // number

let number = 5;
console.log((number as any).toUpperCase()); // number

// 상속에서 더 구체화된 타입으로 정하기 위해 casting을 사용한다.
// 더 넓은 범위로 casting을 하면 typeScript를 사용하는 의미가 없다.
