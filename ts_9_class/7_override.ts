/**
 * Override
 */

class Parent {
    shout(name: string) {
        return `${name}아 안녕`;
    }
}

class WrongChild extends Parent {
    // 1. 부모 메서ㅡ와 반환 타입이 일치해야한다.
    // 2. 부모 메서드에서 필수인 파라미터들이 존재해야한다.
    // 3. 부모 메서드에서 optional인 파라미터들이 자식에서 필수로 지정되면 안된다.
}

class Child extends Parent {
    shout(name: string, me?: string): string {
        if (!me) {
            return super.shout(name);
        } else {
            return `${name}아 안녕, 내이름은 ${me}야`;
        }
    }
}

const child = new Child();
console.log(child.shout('코드팩토리')); // 코드팩토리아 안녕
console.log(child.shout('코드팩토리', '아리')); // 코드팩토리아 안녕, 내이름은 아리야

/**
 * 속성 override
 */
class Propertyparent {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class PropertyChild extends Propertyparent {
    //  Type 'number' is not assignable to type 'string'.ts(2416)
    // name: number;

    constructor(name: string) {
        super(name);
    }
}

class PropertyParent2 {
    name?: string | number;
    constructor(name: string | number) {
        this.name = name;
    }
}

class PropertyChild2 extends PropertyParent2 {
    name: string;
    constructor(name: string) {
        super(name);
        this.name = name;
    }
}

const child2 = new PropertyChild2('코드팩토리');
console.log(child2.name); // 코드팩토리 // string
