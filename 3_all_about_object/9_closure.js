/**
 * Closuere
 *
 * 클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다.
 *
 * 상위 함수보다 하위 함수가 더 오래 살아있는 경우를 clousure라고 한다.
 */
function getNumber() {
    var number = 5;
    function innerGetNumber() {
        return number;
    }

    return innerGetNumber();
}

console.log(getNumber());

function getNumber() {
    var number = 5;

    function innerGetNumber() {
        return number;
    }
    return innerGetNumber;
}

const runner = getNumber(); // 함수의 응답값 ( 함수 저장 )

console.log(runner);
console.log(runner()); //5
// 상위함수인 getNumber보다 하위함수인 innerGetNumber가 더 오래 남아 있다.

/**
 * 1) 데이터 캐싱
 */
function cacheFunction(newNumber) {
    // 아래 로직이 오래 걸린다는가정하에 매번 동작해야함 ( var 선언 부)
    var number = 10 * 10;
    return number * newNumber;
}

console.log(cacheFunction(10));

function cacheFunction2(newNumber) {
    var number = 10 * 10;
    function innerCacheFuntion(newNumber) {
        return number * newNumber;
    }
    return innerCacheFuntion;
}

const runner2 = cacheFunction2();

// 아래처럼 같은함수를 여러번 호출시 var 선언부는 단한번만 실행된다.
console.log(runner2(10));
console.log(runner2(20));

function cacheFunction3() {
    var number = 99;

    function increment() {
        number++;
        return number;
    }
    return increment;
}

const runner3 = cacheFunction3();
console.log(runner3()); // 100
console.log(runner3()); // 101
console.log(runner3()); // 102
console.log(runner3());
console.log(runner3());

/**
 * 3) 정보 은닉
 */
function Idol(name, yaer) {
    this.name = name;
    var _yaer = yaer;

    this.sayNameAndYaer = function () {
        return `안녕하세요 저는 ${this.name}입니다. ${_yaer}에 태어났습니다.`;
    };
}

const yuJin = new Idol('안유진', 2003);
console.log(yuJin.sayNameAndYaer());
console.log(yuJin.name); // 안유진
console.log(yuJin._yaer); // undefined
