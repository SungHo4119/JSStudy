/**
 * All about objects
 * 객체를 선언할 때 사용 할 수 있는 방법들
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 2) class를 인스턴스화해서 생성 - class 와 oop
 * 3) function을 사용해서 객체 생성
 */
const yuJin = {
    name: '안유진',
    year: 2003,
};
console.log(yuJin);

class IdolModel {
    name;
    yaer;
    constructor(name, yaer) {
        this.name = name;
        this.yaer = yaer;
    }
}
console.log(new IdolModel('안유진', 2003));

// 생성자 함수
function IdolFunction(name, yaer) {
    this.name = name;
    this.yaer = yaer;
}

const gaEul = new IdolFunction('가을', 2002);
console.log(gaEul);
