/**
 * Method에서 Generic 사용하기
 */
class Idol<T> {
    id: T;
    name: string;

    constructor(id: T, name: string) {
        this.id = id;
        this.name = name;
    }

    sayHello<Time>(logTime: Time): string {
        return `Hello, my name is ${this.name} and the time is ${logTime}`;
    }
}

const yuJin = new Idol('a099', 'Yujin');
console.log(yuJin.sayHello('2023-10-10'));
console.log(yuJin.sayHello(1994));
console.log(yuJin.sayHello(new Date()));

class Message<T> {
    sayHello<Time>(logTime: Time, message: T) {
        console.log(`Hello, ${message} and the time is ${logTime}`);
    }
}

const message = new Message<string>();
message.sayHello<number>(2000, '하이');

class DuplicateGenericName<T> {
    sayHello<Time>(logTime: Time) {
        console.log(`Hello, the time is ${logTime}`);
    }
}
const duplicate = new DuplicateGenericName<string>();
// sayHello method의 generic type과 class의 generic type이 같을때는
// class의 generic type을 사용한다.
// 그러니까 같은 이름으로 generic type을 사용하지 않는편이좋다 ( 헷갈린다... )
duplicate.sayHello<number>(123);
