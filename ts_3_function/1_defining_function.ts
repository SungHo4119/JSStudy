/**
 * Defining Function
 */
function printName(name: string) {
    console.log(name);
}

function returnTwoCouples(persoin1: string, person2: string) {
    return `${persoin1}과 ${person2}은 부부입니다.`;
}

console.log(returnTwoCouples('홍길동', '김철수'));
// 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)
// returnTwoCouples(1, 0);

/**
 * Optional Parameter
 */
function mulitplyOrReturn(x: number, y?: number) {
    if (y) {
        return x * y;
    }
    return x;
}
console.log(mulitplyOrReturn(2, 3)); // 6
console.log(mulitplyOrReturn(2)); // 2
function mulitplyOrReturn2(x: number, y: number = 20) {
    return x * y;
}

console.log(mulitplyOrReturn2(2, 3)); // 6
console.log(mulitplyOrReturn2(2)); // 40

/**
 * 나머지 매개변수
 */
function getInfiniteParameters(...args: string[]) {
    return args.map(arg => `${arg}`);
}

console.log(getInfiniteParameters('a', 'b', 'c'));

/**
 * Return Type
 */
function addTwoNumbers(x: number, y: number): number {
    return x + y;
}
console.log(addTwoNumbers(1, 2)); // 3

function randomNumber() {
    return Math.random() > 0.5 ? 1 : '랜덤';
}
function subtractTwoNumbers(x: number, y: number): number {
    if (x > y) {
        return x - y;
    }
    throw new Error('x가 y보다 작습니다.');
}

/**
 * 특수 반환 타입
 * void, never
 */
function doNotReturn(): void {
    console.log('반환값이 없습니다.');
    // 'number' 형식은 'void' 형식에 할당할 수 없습니다.ts(2322)
    // return 3;

    return;
}

function throwError(): never {
    throw new Error('반환값이 없습니다.');
}

function neverEndingLoop(): never {
    while (true) {}
}
