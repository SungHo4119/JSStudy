/**
 * Class as a Type and Value
 */
class Dog {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    bark() {
        return `${this.name}가 짖습니다.`;
    }
}

let ori = new Dog('오리');
console.log(ori.bark()); // 오리가 짖습니다.

// ori = '오리' //Type 'string' is not assignable to type 'Dog'.

ori = {
    name: '별이',
    bark() {
        return `${this.name}가 짖습니다.`;
    },
}; // let ori: Dog
// 시그니처가 같으면 같다고 판단한다.
