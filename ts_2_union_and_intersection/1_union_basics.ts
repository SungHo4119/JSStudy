/**
 * Union Basics
 *
 * 유니언은 TS에서 타입을 병합 할 수 있는 수많은 방법중 하나이다.
 */
type StringOrBooleanType = string | boolean;

let stringOrBooleanType: StringOrBooleanType = '아이브';
stringOrBooleanType = true; // string | boolean

// stringOrBooleanType = undefined; // Error: string | boolean

type StringBoolNullType = string | boolean | null;
type StateType = 'DONE' | 'LOADING' | 'ERROR';

let state: StateType = 'DONE';
state = 'LOADING';
state = 'ERROR';

/**
 * 리스트의 union
 */
type StringListOrBooleanListType = string[] | boolean[];
let stringListOrBooleanListType: StringListOrBooleanListType = ['아이브', '뉴진스'];

stringListOrBooleanListType = [true, false];

// stringListOrBooleanListType = ['새진스', true]; // ERROR String OR Boolean

type StrORBoolListType = (string | boolean)[];
let strORBoolListType: StrORBoolListType = ['아이브', true];

/**
 * interface로 사용하는 union
 */
interface Animal {
    name: string;
    age: number;
}
interface Human {
    name: string;
    age: number;
    address: string;
}

type AnimalOrHumanType = Animal | Human;

let animalOrHuman: AnimalOrHumanType = {
    name: '아이브',
    age: 20,
    address: '서울',
};
// address가 있기 때문에 자동으로 Human으로 타입이 지정된다.
console.log(animalOrHuman);

let animalOrHuman2: AnimalOrHumanType = {
    name: '강아지',
    age: 20,
};
// address가 없기 때문에 자동으로 Animal 타입이 지정된다.
console.log(animalOrHuman2);
// console.log(animalOrHuman2.address); // ERROR
// 캐스팅한다면 가능하지만 실행시 undefined가 나올 수 있다.
console.log((animalOrHuman2 as Human).address);

type Person = {
    name: string;
    age: number;
};
type Cat = {
    breed: string;
    country: string;
};

type PersonOrCat = Person | Cat;
let personOrCat: PersonOrCat = {
    name: '코드팩토리',
    age: 32,
    breed: 'Yorkshire Terrier',
    country: 'UK',
};
// personOrCat 유니언은 합집합의 개념으로 전부 사용 가능하다...
let personOrCat2: PersonOrCat = {
    name: '코드팩토리',
    age: 32,
};
// person 타입
console.log(personOrCat2);

let personOrCat3: PersonOrCat = {
    breed: 'Yorkshire Terrier',
    country: 'UK',
};
// cat타입
console.log(personOrCat3);

// Error
// 어떤 형식도 만족할 수없기 때문에 오류가 발생한다.
/**
 * '{ name: string; country: string; }' 형식은 'PersonOrCat' 형식에 할당할 수 없습니다.
  'breed' 속성이 '{ name: string; country: string; }' 형식에 없지만 'Cat' 형식에서 필수입니다.ts(2322)

 */
// let personOrCat: PersonOrCat = {
//     name: '코드팩토리',
//     country: 'UK',
// };
