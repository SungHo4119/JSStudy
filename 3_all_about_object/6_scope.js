/**
 * Scope
 */
var numberOne = 20;

function levelOne() {
    var numberOne = 40;
    function levelTow() {
        var numberTwo = 99;
        console.log(`levelTow numberOne : ${numberOne}`);
        console.log(`levelTow numberTwo : ${numberTwo}`);
    }
    levelTow();
    console.log(`levelOne numberOne : ${numberOne}`);
}

levelOne();

// 모든 선언은 가장 가까운 변수부터 가지고 오게 된다.
console.log(numberOne);
// console.log(numberTwo); // numberTwo is not defined

/**
 * JS -> Lexical Scope
 * 선언된 위치가 상위 스코프를 정한다.
 *
 * Dynamic Scope
 * 실행한 위치가 상위 스코프를 정한다.
 */
var numberThree = 3;
function functionOne() {
    var numberThree = 100;
    functionTwo();
}
function functionTwo() {
    console.log(numberThree); // 3
}
functionOne();

var i = 999;
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(`i in global scope: ${i}`);

i = 999;
// block level scopre
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(`i in global scope: ${i}`);

/**
 * var 키워드는 함수 레벨 스코프만 만들어 낸다.
 * let const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어 낸다.
 */
