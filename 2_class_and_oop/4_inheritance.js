class IdolModel {
    name;
    year;
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel {
    dance() {
        return '여자 아이돌이 춤을 춥니다.';
    }
}

class MaleIdolModel extends IdolModel {
    dance() {
        return '남자 아이돌이 춤을 춥니다.';
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin.dance());

const jimin = new MaleIdolModel('지민', 1995);
console.log(jimin.dance());

const cf = new IdolModel('코드팩토리', 1992);
console.log(cf);

console.log(cf.name);
// console.log(cf.dance());

console.log(yuJin instanceof IdolModel); //   true
console.log(yuJin instanceof FemaleIdolModel); // true
console.log(yuJin instanceof MaleIdolModel); // false

console.log(cf instanceof MaleIdolModel); // false
