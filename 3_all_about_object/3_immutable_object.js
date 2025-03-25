/**
 * Immutable Object
 */
const yuJin = {
    name: '안유진',
    yaer: 2003,
    get age() {
        return new Date().getFullYear() - this.yaer;
    },
    set age(ate) {
        this.yaer = new Date().getFullYear() - this.age;
    },
};

/**
 * Extensible : 값이 추가 가능하냐?
 */
console.log(Object.isExtensible(yuJin)); // true

yuJin['position'] = 'vocal';

console.log(yuJin);

Object.preventExtensions(yuJin); // true -> false
console.log(Object.isExtensible(yuJin)); //fase

yuJin['groupName'] = '아이브'; // 추가 안됨
console.log(yuJin);
delete yuJin['position']; // 삭제는 됨
console.log(yuJin);

/**
 * Seal : 봉인이 되어있냐?
 */

const yuJin2 = {
    name: '안유진',
    yaer: 2003,
    get age() {
        return new Date().getFullYear() - this.yaer;
    },
    set age(ate) {
        this.yaer = new Date().getFullYear() - this.age;
    },
};
console.log(yuJin2);
console.log(Object.isSealed(yuJin2)); // false
Object.seal(yuJin2);
console.log(Object.isSealed(yuJin2)); // true
yuJin['groupName'] = '아이브'; // 추가 안됨
console.log(yuJin);
delete yuJin2['name']; // 삭제도 안됨
console.log(yuJin2);
Object.defineProperty(yuJin2, 'name', {
    value: '코드팩토리',
    writable: false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name')); // seal은 configurable가 false가 된다.

/**
 * Freezed
 * 읽기 외에 모든 기능을 불가능하게 막는다.
 */
const yuJin3 = {
    name: '안유진',
    yaer: 2003,
    get age() {
        return new Date().getFullYear() - this.yaer;
    },
    set age(ate) {
        this.yaer = new Date().getFullYear() - this.age;
    },
};

console.log(Object.isFrozen(yuJin3)); // false
Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3)); // true

yuJin3['test'] = 'test';
delete ['name'];

console.log(yuJin3); // { name: '안유진', yaer: 2003, age: [Getter/Setter] }

const yuJin4 = {
    name: '안유진',
    year: 2003,
    wonYoung: {
        name: '장원영',
        yaer: 2002,
    },
};

Object.freeze(yuJin4);
console.log(Object.isFrozen(yuJin4)); // true
console.log(Object.isFrozen(yuJin4['wonYoung'])); // false
// 내부에 속성은 freeze 되지않는다 필요하다면 내부 검사를 통해서 전부 freeze 해야한다.
