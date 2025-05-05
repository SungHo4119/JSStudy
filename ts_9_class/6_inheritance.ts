/**
 * Inheritance in TypeScript
 */

class Parent {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    dance() {
        console.log(`${this.name} is dancing!`);
    }
}

class Child extends Parent {
    age: number;
    constructor(name: string, age: number) {
        super(name); // Call the constructor of the Parent class
        this.age = age;
    }

    sing() {
        console.log(`${this.name} is singing!`);
    }
}

const codefacotry = new Parent('코드팩토리');

const ahri = new Child('아리', 3);

codefacotry.dance(); // 코드팩토리 is dancing!
ahri.dance(); // 아리는 dancing!
ahri.sing(); // 아리는 singing!

let person: Parent;
person = new Parent('코드팩토리');
person.dance(); // 코드팩토리 is dancing!

person = new Child('아리', 3);
person.dance(); // 아리는 dancing!
//Property 'sing' does not exist on type 'Parent'.
// person.sing();

// let child: Child;
// Type 'Parent' is missing the following properties from type 'Child': age, sing
// child = new Parent('코드팩토리');
// // 부모는 자식타입이 될 수 없다.

/**
 * 타입스크립트는 되는 방법 ( 다른언어는 안됨 ... )
 * optional 프로퍼티를 유의하자
 */

class Parent2 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Child2 extends Parent2 {
    age?: number; // optional
    constructor(name: string, age?: number) {
        super(name);
        this.age = age;
    }
}

const cf2 = new Parent2('코드팩토리');
const ahri2 = new Child2('아리', 3);

let child: Child2;
child = ahri2;
child = cf2; // age가 optional이기 때문에 구조가 같을 수 있어서 가능
