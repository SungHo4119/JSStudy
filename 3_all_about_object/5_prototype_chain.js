/**
 * Prototype
 */
const testObject = {};

// __proto__ 모든 객체에 존재하는 프로퍼티다.
// class 강의에서 배울 때 상속에서 부모 클래스에 해당 되는 값이다.
console.log(testObject.__proto__); // [Object: null prototype] {}

function IdolModel(name, yaer) {
    this.name = name;
    this.yaer = yaer;
}

console.log(IdolModel.prototype); //{}

/**
 * <ref *1> {
  [constructor]: [Function: IdolModel] {
    [length]: 2,
    [name]: 'IdolModel',
    [arguments]: null,
    [caller]: null,
    [prototype]: [Circular *1]
  }
}
 */
console.dir(IdolModel.prototype, {
    showHidden: true,
});

// circular reference : 서로가 서로를 참조하고 있는 상태
console.log(IdolModel.prototype.constructor === IdolModel); // true
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype); // true

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin.__proto__); //{}
console.log(yuJin.__proto__ === IdolModel.prototype); //true
console.log(testObject.__proto__ === Object.prototype); //true

console.log(IdolModel.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(IdolModel.prototype.__proto__ === Object.prototype); // true
//모든 값들의 최상위는 Object.prototype 이다. ( 상속 체인 - 프로토 타입 체인 )

console.log(yuJin.toString()); // [object Object]
console.log(Object.prototype.toString()); //[object Object]
// 상속 받은 대상의 모든 기능을 사용 가능하다.

function IdolModel2(name, yaer) {
    this.name = name;
    this.yaer = yaer;

    this.sayHello = function () {
        return `${this.name}이 인사를 합니다.`;
    };
}
const yuJin2 = new IdolModel2('안유진', 2003);
const wonYoung2 = new IdolModel2('장원영', 2002);
console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello());
console.log(yuJin2.sayHello === wonYoung2.sayHello); // false

console.log(yuJin2.hasOwnProperty('sayHello')); //true
function IdolModel3(name, yaer) {
    this.name = name;
    this.yaer = yaer;
}
IdolModel3.prototype.sayHello = function () {
    return `${this.name}이 인사를 합니다.`;
};

const yuJin3 = new IdolModel3('안유진', 2003);
const wonYoung3 = new IdolModel3('장원영', 2002);
console.log(yuJin3.sayHello());
console.log(wonYoung3.sayHello());
// IdolModel3.prototype.sayHello에 넣음으로 yuJin3, wonYoung3이 상속받아서 사용하는 것과 같다
console.log(yuJin3.sayHello === wonYoung3.sayHello); // true

console.log(yuJin3.hasOwnProperty('sayHello')); // false //yuJin3는 sayHello이름의 프로퍼티가 없다.

IdolModel3.saySaticHello = function () {
    return '안녕하세요 저는 static 메소드 입니다.';
};
console.log(IdolModel3.saySaticHello());

/**
 * Overriding
 */
function IdolModel4(name, yaer) {
    this.name = name;
    this.yaer = yaer;
    this.sayHello = function () {
        // 오버라이딩
        return '안녕하세요 저는 인스턴스 메서드 입니다.';
    };
}
IdolModel4.prototype.sayHello = function () {
    // 부모의 함수
    return `안녕하세요 저는 prototype 메서드 입니다.`;
};
const yuJin4 = new IdolModel4('안유진', 2003);
console.log(yuJin4.sayHello());

// JS는 인스턴스를 생성하고 난 다음에 상속받는 인스턴스를 바꿀 수있다.( 부모 변경가능)
/**
 * getPrototypeOf, setPrototypeOf
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */
function IdolModel(name, yaer) {
    this.name = name;
    this.year = yaer;
}

IdolModel.prototype.sayHello = function () {
    return `${this.name}이 인사를 합니다.`;
};

function FemaleIdolModel(name, yaer) {
    this.name = name;
    this.year = yaer;
    this.dance = function () {
        return `${this.name}이 춤을 춥니다.`;
    };
}

const gaEul = new IdolModel('가을', 2004);
const ray = new FemaleIdolModel('레이', 2004);

console.log(gaEul.__proto__); // { sayHello: [Function (anonymous)] }
console.log(gaEul.__proto__ === IdolModel.prototype); // true
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype); // true

console.log(gaEul.sayHello());
console.log(ray.dance());
console.log(ray.constructor); // [Function: FemaleIdolModel]
// console.log(ray.sayHello()); 아무것도 안하고 호출하면 오류남 ( 없으니까 )
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype); // true

Object.setPrototypeOf(ray, IdolModel.prototype); // 상속 체인 변경
console.log(ray.sayHello()); // 레이이 인사를 합니다.

console.log(ray.constructor); // [Function: IdolModel]

// 함수 prototype 변경
FemaleIdolModel.prototype = IdolModel.prototype;
const eSeo = new FemaleIdolModel('이서', 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype); // true
console.log(FemaleIdolModel.prototype === IdolModel.prototype); // true
