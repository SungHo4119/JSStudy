/**
 * Interface
 */
interface Animal {
    name: string;
    age: number;

    jump(): string;
}
// implements을 한다면 모든 내용을 구현해야한다.
class Dog implements Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    jump(): string {
        return `${this.name} is jumping!`;
    }

    // 추가로 정의 하는건 괜찮다
    dance() {}
}

const ori = new Dog('오리', 3);

function instanceOfAnimal(object: any): object is Animal {
    return 'jump' in object;
}

if (instanceOfAnimal(ori)) {
    ori; // Dog
}

/**
 * 다중 인터페이스 구현
 */

interface Pet {
    legsCount: number;
    bark(): void;
}

class Cat implements Animal, Pet {
    // Animal
    name: string;
    age: number;
    // Pet
    legsCount: number;
    constructor(name: string, age: number, legsCount: number) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }
    // Animal
    jump(): string {
        return `${this.name} is jumping!`;
    }
    // Pet
    bark(): void {
        console.log('냐옹');
    }
}

type AnimalAndPet = Animal & Pet;
class Cat2 implements AnimalAndPet {
    name: string;
    age: number;
    legsCount: number;
    constructor(name: string, age: number, legsCount: number) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }
    jump(): string {
        return `${this.name} is jumping!`;
    }
    bark(): void {
        console.log('냐옹');
    }
}

interface WrongInterFace1 {
    name: string;
}
interface WrongInterFace2 {
    name: number;
}

class Person implements WrongInterFace1, WrongInterFace2 {
    // Property 'name' in type 'Person' is not assignable to the same property in base type 'WrongInterFace1'.
    // Type 'string | number' is not assignable to type 'string'.
    //   Type 'number' is not assignable to type 'string'.ts(2416)
    name: never;
    age: number;
    constructor(name: never, age: number) {
        this.age = age;
        this.name = name;
    }
}

class Idol {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

interface IdolConstructor {
    new (name: string, age: number): Idol;
}

function createIdol(constructor: IdolConstructor, name: string, age: number): Idol {
    //     (parameter) constructor: IdolConstructor
    // new (name: string, age: number) => Idol
    return new constructor(name, age);
}

createIdol(Idol, '아이유', 30); // Idol
