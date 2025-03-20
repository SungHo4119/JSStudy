/**
 * Property Attribute
 *
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 엑세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나 설정할 때 호출되는 함수로 구성된 프로퍼티 ( getter setter )
 *
 */
const yuJin = {
    name: '안유진',
    yaer: 2003,
};
console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
// { value: '안유진', writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(yuJin, 'yaer'));
// { value: 2003, writable: true, enumerable: true, configurable: true }

/**
 * 1) value - 프로퍼티의 값
 * 2) writable - 값을 수정 할 수 있는지 여부, false로 설정하면 프로퍼티 값을 수정할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부, for...in 등을 사용 할 수 있으면 true를 반환한다.
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다. false일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금진된다
 *                      단 ) writable이 true인 경우 값 변경과 writable을 변경하는건 가능하다.
 */

console.log(Object.getOwnPropertyDescriptors(yuJin));

const yuJin2 = {
    name: '안유진',
    yaer: 2003,

    get age() {
        return new Date().getFullYear() - this.yaer;
    },

    set age(age) {
        this.yaer = new Date().getFullYear() - age;
    },
};

console.log(yuJin2);
console.log(yuJin2.age);
yuJin2.age = 32;
console.log(yuJin2, yuJin2.age);

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));
// {
//   get: [Function: get age],
//   set: [Function: set age],
//   enumerable: true,
//   configurable: true
// }

yuJin2.height = 172;
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
// { value: 172, writable: true, enumerable: true, configurable: true }

Object.defineProperty(yuJin2, 'yuJin2', { value: 99, writable: true, enumerable: true, configurable: true }); // 정의하지 않음녀 기본 false로 추가된다.
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'yuJin2'));
console.log(yuJin2);

Object.defineProperty(yuJin2, 'height', { writable: false });
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
yuJin2.height = 150;
console.log(yuJin2); // 오류발생하지 않지만 값 변경 하지 못한다.

/**
 * Enumerable
 */
console.log(Object.keys(yuJin2)); // [ 'name', 'yaer', 'age', 'height', 'yuJin2' ]
for (let key in yuJin2) {
    console.log(key);
}

Object.defineProperty(yuJin2, 'name', { enumerable: false });

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name')); // { value: '안유진', writable: true, enumerable: false, configurable: true }
// enumerable 값이 false 이기 때문에 열거로 나오지 않는다.
console.log(Object.keys(yuJin2)); // [ 'yaer', 'age', 'height', 'yuJin2' ]
console.log(Object.values(yuJin2)); // [ 1993, 32, 172, 99 ]

console.log(yuJin2); // { yaer: 1993, age: [Getter/Setter], height: 172, yuJin2: 99 }

console.log(yuJin2.name); // 안유진

/**
 * configurable
 */
Object.defineProperty(yuJin2, 'height', { writable: true, configurable: false });
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height')); // { value: 172, writable: true, enumerable: true, configurable: false }

// Object.defineProperty(yuJin2, 'height', { enumerable: false }); configurable 값이 false기 때문에 enumerable을 바꿀 수 없다

Object.defineProperty(yuJin2, 'height', { value: 180 });
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height')); // { value: 180, writable: true, enumerable: true, configurable: false }

Object.defineProperty(yuJin2, 'height', { writable: false });
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height')); // { value: 180, writable: false, enumerable: true, configurable: false }

Object.defineProperty(yuJin2, 'height', { writable: true });
//  ^
// TypeError: Cannot redefine property: height
// configurable: false 이기 때문에 writable false => true로 못바꾼다
