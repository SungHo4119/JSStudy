/**
 * Class Decorator
 */
@Test
@Frozen
@LogTest('development')
@ChangeClass
class Idol {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

function Test(constructor: Function) {
    console.log(constructor);
}

function Frozen(constructor: Function) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}

const yuJin = new Idol('안유진', 20);
console.log(Object.isFrozen(Object.getPrototypeOf(yuJin))); // true // prototype이 Freeze 되어있음.

// decorator factory
function LogTest(env: string) {
    console.log('---------------------');
    return function (constructor: Function) {
        console.log(`${env}: ${constructor}`);
    };
}

console.log('---------------------');
// 클래스 데코레이터는 한번만 실행이 된다. 새로운 객체를 생성했다고 한번더 실행되지 않는다.
const wonYoung = new Idol('원영', 20);
console.log(wonYoung);

// class decorator를 이용해서 속성이 추가가 가능하다.
function ChangeClass<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        groupName = '아이브';
        constructor(...params: any[]) {
            super(...params);
            console.log('constructor instantiated');
        }
    };
}
