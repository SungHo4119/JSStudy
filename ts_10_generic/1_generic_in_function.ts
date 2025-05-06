/**
 * Generic 함수에서 사용하기
 */

function whatValue(value: any) {
    return value;
}

const value = whatValue(1);
const value2 = whatValue('hello');

function genericWhatValut<T>(value: T): T {
    return value;
}

const genericWhatResult1 = genericWhatValut<string>('hello');
const genericWhatResult2 = genericWhatValut<number>(1);
const genericWhatResult3 = genericWhatValut<boolean>(true);

// 일반적으로 대문자를 많이 사용하고 한글자를 많이 사용한다
function multiplegenerics<X, Y, Z>(x: X, y: Y, z: Z) {
    return [x, y, z];
}

const multipleGenericResult = multiplegenerics<string, number, boolean>('hello', 1, true); // (string | number | boolean)[]
const multipleGenericResult2 = multiplegenerics('hello', 1, true); // (string | number | boolean)[]

function getTuple<X, Y>(val1: X, val2: Y): [X, Y] {
    return [val1, val2] as const;
}

const tuple = getTuple(1, 'hello'); // [number, string]

class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Car {
    brand: string;
    codeName: string;

    constructor(brand: string, codeName: string) {
        this.brand = brand;
        this.codeName = codeName;
    }
}

// new (...args: any[]) 는 생성자 함수(constructor) 를 의미하고
// : {} 는 객체를 반환하는것을 의미..
// 따라서 T는 생성자 매개변수로 뭐든 들어올 수있고 객체를 반환한다.
function instantiator<T extends { new (...args: any[]): {} }>(constructor: T, ...args: any[]) {
    return new constructor(...args);
}

// 넣은 순서대로 들어간다. ( 초과해서 넣는 매개변수는 무시된다. )
console.log(instantiator(Idol, '아이유', 30)); // Idol { name: '아이유', age: 30 }
console.log(instantiator(Car, '현대', '아반떼')); // Car { brand: '현대', codeName: '아반떼' }
