/**
 * Constructor Parameter
 */
class Idol {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// 클래스의 타입을 넣어야함 typeof Idol
// type ConstructorParams = [name: string, age: number]
type ConstructorParams = ConstructorParameters<typeof Idol>;
