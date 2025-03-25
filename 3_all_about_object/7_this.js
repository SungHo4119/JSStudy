/**
 * this
 *
 * JS는 Lexical Scopre를 사용하기 때문에 함수의 상위 스코프가 정의 시점에 평가된다.
 *
 * 하지만 this 키워드는 바인딩이 객체가 생성되는 시점에 결정된다.
 */
const testFuntion = function () {
    return this;
};
console.log(testFuntion()); // <ref *1> Object [global] {
console.log(testFuntion() === global); // true

const yuJin = {
    name: '안유진',
    year: 2003,
    sayHello: function () {
        return `안녕하세요 저는 ${this.name}입니다.`;
    },
};
console.log(yuJin.sayHello()); // 안녕하세요 저는 안유진입니다.

function Person(name, yaer) {
    this.name = name;
    this.year = yaer;

    this.sayHello = function () {
        return `안녕하세요 저는 ${this.name}입니다.`;
    };
}
const yuJin2 = new Person('안유진', 2003);
console.log(yuJin2.sayHello()); // 안녕하세요 저는 안유진입니다.

Person.prototype.dance = function () {
    return `${this.name}이 춤을 춥니다.`;
};
console.log(yuJin2.dance()); // 안유진이 춤을 춥니다.

Person.prototype.dance2 = function () {
    function dance3() {
        return `${this.name}이 춤을 춥니다.`;
    }
    return dance3();
};
console.log(yuJin2.dance2()); // undefined이 춤을 춥니다.
/**
 * this 키워드가 어떤 걸 가르킬까?
 * 1) 일반 함수 호출할 땐 this가 최사우이 객체 ( global또는 window)를 가르킨다.
 * 2) 메서드로 호출 할 땐 호출된 객체를 가르킨다.
 * 3) new 키워드를 사용해서 객체를 생성했을때 객체를 가르킨다
 */

/**
 * 1) apply()
 * 2) call()
 * 3) bind()
 */
function returnName() {
    return this.name;
}
console.log(returnName); // [Function: returnName]

const yuJin3 = {
    name: '안유진',
};
console.log(returnName.call(yuJin3)); // 안유진
console.log(returnName.apply(yuJin3)); // 안유진

/**
 * 1) call -> 콤마를 기반으로 아큐먼트를 순서대로 넘겨주고
 * 2) apply() -> 아규먼트를 리스트로 입력해야한다.
 */
function multiply(x, y, z) {
    return `${this.name} / 결과값 : ${x * y * z}`;
}
console.log(multiply.call(yuJin3, 3, 4, 5)); // 안유진 / 결과값 : 60
console.log(multiply.apply(yuJin3, [3, 4, 5])); //안유진 / 결과값 : 60

/**
 * bind() - call, apply와 다르게 바로 함수가 실행되지 않고 나중에 실행 할 수 있다.
 */
const laterfunc = multiply.bind(yuJin3, 3, 4, 5);
console.log(laterfunc); //[Function: bound multiply]
console.log(laterfunc()); // 안유진 / 결과값 : 60
