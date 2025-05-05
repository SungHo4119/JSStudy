/**
 * Problems With array in JS
 */

const number = [1, '2', 3, '4', 5];

let strings: string[] = ['1', '2', '3', '4', '5'];

let stringOrNumberArry: (string | number)[] = ['1', '2', 3, '4', 5];

let stringArrNumberArr: string[] | number[] = ['1', '2', '3', '4', '5'];
stringArrNumberArr = [1, 2, 3, 4, 5];

const onlyString = ['1', '2', '3'];
const onlyNumber = [1, 2, 3];

for (let i = 0; i < onlyString.length; i++) {
    let item = onlyString[i]; // string
}

for (let item of onlyString) {
    item; // string
}

let number4 = onlyNumber[0]; // number
let string4 = onlyString[9999]; // string  // TS는 튜플이 아닌이상 길이를 신경쓰지 않는다.
