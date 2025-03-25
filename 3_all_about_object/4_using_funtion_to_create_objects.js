/**
 * Using funtion to create objects
 */

function IdolModel(name, yaer) {
    if (!new.target) {
        // new 없이 생성하게 되는 경우 객체를 만들어서 전달 할 수있다.
        return new IdolModel(name, yaer);
    }

    this.name = name;
    this.yaer = yaer;

    // 이건 하지마라 - 생성자 함수를 사용할 수 없다.
    // return {};

    this.dance = function () {
        return `${this.name}이 춤을 춥니다.`;
    };
}
const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.dance());

const yuJin2 = IdolModel('안유진', 2003);
console.log(yuJin2); // undefined
// console.log(global.name); // 안유진
// 이것도 하지말자!
// global : yuJin2처럼 new 키워드르 ㄹ사용하지 않고 생성자 함수를 실행하게되면 글로벌로 this키워드가 붙게됨..

const IdolModelArrow = (name, yaer) => {
    this.name = name;
    this.yaer = yaer;
};
const yuJin3 = new IdolModelArrow('안유진', 2003); // IdolModelArrow is not a constructor
// new 키워드를 사용 할 수 없다.
