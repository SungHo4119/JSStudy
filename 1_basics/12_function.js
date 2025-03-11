/**
 * DRY
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */
function calculate() {
    console.log((3 * 10) / (2 % 3).toString());
}

calculate();

function calculate2(number) {
    console.log((number * 10) / (2 % 3).toString());
}

calculate2(5);

function multiply(x, y) {
    console.log(x * y);
}

multiply(2, 4);

function multiply2(x, y = 10) {
    console.log(x * y);
}

multiply2(2);

/**
 * 반환 받기
 */

function multiply3(x, y) {
    return x * y;
}

console.log(multiply3(2, 4));

/**
 * Arrow 함수
 */

const multiply4 = (x, y) => {
    return x * y;
};
console.log(multiply4(5, 5));

const multiply5 = (x, y) => x * y;
console.log(multiply5(5, 5));

const multiply6 = x => x * 2;
console.log(multiply6(5));

const multiply7 = x => y => z => `x: ${x} y:${y} z:${z}`;
console.log(multiply7(2)(5)(2));

function multiply8(x) {
    return function multiply9(y) {
        return function multiply10(z) {
            return `x: ${x} y:${y} z:${z}`;
        };
    };
}

console.log(multiply8(2)(5)(2));

const multiplyTwo = function (x, y) {
    return x * y;
};

const multiplyThree = function (x, y, z) {
    console.log(arguments);
    return x * y * z;
};
console.log('-----------');
console.log(multiplyThree(1, 2, 3));

const multiplyAll = function (...arguments) {
    return Object.values(arguments).reduce((a, b) => a * b, 1); // =>  ...arguments 의 모든값을 곱한다.
};

console.log(multiplyAll(1, 2, 3, 4, 5)); // 1*2*3*4*5

// immediately invoked function
(function (x, y) {
    console.log(x * y);
})(4, 5); // 20

console.log(typeof multiply); // function
console.log(multiply instanceof Object); // true
