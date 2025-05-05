/**
 * Loopholes of any
 */
let number;
number;
number = 10;

// number.toUpeerCase();
// (number as any).toUpperCase(); error

const multipltyTwo = (x: number, y: number) => {
    return x * y;
};
let args: any = '코드팩토리';
let args2: any = true;

multipltyTwo(args, args2);
// multipltyTwo('코드팩토리', true); // 오류.,..

let iu: any = { name: '아이유', age: 30 };

const callbackRunner = (x: number, y: number, callback: any) => {
    return callback(x, y);
};
const callback = (x: number, y: number) => {
    return x + y;
};

console.log(callbackRunner(10, 20, callback)); // 30

// callback: any 기 떄문에 타입안정성이 보장이 되지않고 callbackRunner의 매개변수를 수정하거나 callback의 매개변수를 수정해도 오류가 발생하지 않는다.
// 런타임오류가 발생하므로 사전에 오류를 인지할 수없다 ( 가능하면 any를 사용하지 말자 )
