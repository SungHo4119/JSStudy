/**
 * Intersection
 */
interface Human {
    name: string;
    age: number;
}
interface Contacts {
    phone: string;
    address: string;
}

type HumanContacts = Human & Contacts;
// &를 사용하게 되면 두 인터페이스의 프로퍼티를 모두 포함하는 새로운 타입이 생성된다.
let humanAndContacts: HumanContacts = {
    name: 'John',
    age: 30,
    phone: '123-456-7890',
    address: '123 Main St',
};
// type은 never 타입이 된다.
type NumberAndString = number & string;

// '123' 형식은 'never' 형식에 할당할 수 없습니다.ts(2322)
// let numberAndString: NumberAndString = 123;
