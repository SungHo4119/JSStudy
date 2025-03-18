/**
 * Class Keyword
 */
class IdolModel {
    name = '안유진';
    yaer = 2023;
}

const yuJin = new IdolModel();

console.log(yuJin);

class IdolModels {
    name;
    yaer;
    constructor(name, yaer) {
        this.name = name;
        this.yaer = yaer;
    }

    sayName() {
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}

const yuJin2 = new IdolModels('안유진', 2023);
console.log(yuJin2);

const gaeul = new IdolModels('가을', 2002);
console.log(gaeul);

const wonYoung = new IdolModels('원영', 2004);
console.log(wonYoung);

console.log(yuJin2.sayName());
console.log(gaeul.sayName());

console.log(typeof IdolModels); // function
console.log(typeof yuJin2); // object

console.log(yuJin2 instanceof IdolModels); // true
