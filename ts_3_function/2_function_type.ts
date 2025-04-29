/**
 * Funtion Type
 */
type Mapper = (x: string) => string;

const runner = (callback: Mapper) => {
    return ['안유진', '장원영', '레이'].map(callback);
};

console.log(runner(x => `아이브 맴버: ${x}`));

type MultiplyTwoNumbers = (x: number, y: number) => number;

// x, y는 number 타입으로 선언
// return은 number 타입으로 선언
const multiplyTwoNumbers: MultiplyTwoNumbers = (x, y) => x * y;

/**
 * Interface로 함수 타입 선언하기
 */
interface IMultiplyTwoNumbers {
    (x: number, y: number): number;
}

// x, y는 number 타입으로 선언
// return은 number 타입으로 선언
const MultiplyTwoNumbers3: IMultiplyTwoNumbers = (x, y) => {
    return x * y;
};
