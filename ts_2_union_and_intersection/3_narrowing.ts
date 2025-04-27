/**
 * Narrowing
 *
 * Narrowing은 Union 타입에서 더욱 구체적인 타입으로
 * 논리적으로 오추 할 수 있게 되는걸 의미한다.
 */
// let numberOrString: number | string = 'Code Factory';

// 타입을 선언했다고해도 타입스크립트는 값을 통해서 타입을 유추한다.
// numberOrString은 string 타입으로 추론된다.

// const decimal = 12.3278;
// console.log(decimal.toFixed(2)); // 12.33

/**
 * Narrowing 종류
 * 1) Assignment Narrowing
 * 2) typeof Narrowing
 * 3) Truthiness Narrowing
 * 4) Equality Narrowing
 * 5) in operator Narrowing
 * 6) instanceof Narrowing
 * 7) discriminated union Narrowing
 * 8) exhaustiveness checking
 */

/**
 * 1)Assignment Narrowing
 * 특정 값을 할당 해서 내로잉
 */

let numberOrString: number | string = 'Code Factory';

numberOrString.toString(); // string

/**
 * 2)Typeof narrowing
 *
 */
// type - string | number
numberOrString = Math.random() > 0.5 ? 1 : 'Code Factory';

if (typeof numberOrString === 'string') {
    // type - string
    numberOrString;
} else {
    // type - number
    numberOrString;
}

/**
 * 3)Truthiness Narrowing
 *
 */
let nullOrString: null | string[] = Math.random() > 0.5 ? null : ['아이유', '레드벨벳'];

if (nullOrString) {
    // type - string[]
    nullOrString;
} else {
    // type - null
    nullOrString;
}
/**
 * 4)Equality Narrowing
 */
let numberOrString2: number | string = Math.random() > 0.5 ? 1 : '아이유';
let stringOrBoolean: string | boolean = Math.random() > 0.5 ? '레드벨벳' : true;

// 두개의 공통점은 string밖에 없기따문에 둘 모두 string으로 유추되게된다.
if (numberOrString2 === stringOrBoolean) {
    // type - string
    numberOrString2;
    // type - string
    stringOrBoolean;
} else {
    // type - string | number
    numberOrString2;
    // type - string | boolean
    stringOrBoolean;
}
let numberOrStringOrNull: number | string | null = Math.random() > 0.5 ? 1 : Math.random() > 0.5 ? '안유진' : null;

if (typeof numberOrStringOrNull === 'number') {
    // type - number
    numberOrStringOrNull;
} else {
    // type - string | null
    numberOrStringOrNull;
}

/**
 * 5)in operator Narrowing
 */
interface Human {
    name: string;
    age: number;
}
interface Dog {
    name: string;
    type: string;
}

let human: Human = {
    name: '안유진',
    age: 23,
};

let dog: Dog = {
    name: '코코',
    type: '푸들',
};

let humanOrDog: Human | Dog = Math.random() > 0.5 ? human : dog;
// in 연산자를 통해서 humanOrDog가 Human인지 Dog인지 확인할 수 있다.
if ('type' in humanOrDog) {
    // type - Dog
    humanOrDog;
} else {
    // type - Human
    humanOrDog;
}

/**
 * 6)instanceof Narrowing
 */

let dateOrString: Date | string = Math.random() > 0.5 ? new Date() : '코드팩토리';

if (dateOrString instanceof Date) {
    // type - Date
    dateOrString;
} else {
    // type - string
    dateOrString;
}

/**
 * 7)discriminated union Narrowing
 * 타입을 정의할 때 뭉틍그려서 정의하기보단 쪼개서 유니언으로 정의하는게 유츄하는데 유리하다.
 */
interface Animal {
    type: 'dog' | 'human';
    hight?: number;
    breed?: string;
}

let animal: Animal =
    Math.random() > 0.5
        ? {
              type: 'human',
              hight: 170,
          }
        : {
              type: 'dog',
              breed: '푸들',
          };
if (animal.type === 'human') {
    //animal은 Animal 타입
    animal.hight; // type - number | undefined
} else {
    //animal은 Animal 타입
    animal.breed; // type - string | undefined
    animal.hight; // type - number | undefined
}

interface Human2 {
    type: 'human';
    hight: number;
}

interface Dog2 {
    type: 'dog';
    breed: string;
}
interface Fish2 {
    type: 'fish';
    length: string;
}

type HumanOrDog2 = Human2 | Dog2 | Fish2;

let humanOrDog2: HumanOrDog2 =
    Math.random() > 0.5
        ? { type: 'human', hight: 170 }
        : Math.random() > 0.5
        ? { type: 'dog', breed: '푸들' }
        : { type: 'fish', length: '30cm' };

if (humanOrDog2.type === 'human') {
    // type - Human2
    humanOrDog2.hight; // number
} else if (humanOrDog2.type === 'dog') {
    // type - Dog2
    humanOrDog2.breed; // string
} else {
    humanOrDog2.length; // string
}
/**
 * 8)exhaustiveness checking
 */
switch (humanOrDog2.type) {
    case 'human':
        // type - Human2
        humanOrDog2;
        break;
    case 'dog':
        // type - Dog2
        humanOrDog2;
        break;
    default:
        humanOrDog2; // type - never
        // Tip: never 타입을 추가한 경우 타입이 새롭게 추가됬을때 오류를 방지할 수있다..!
        const _check: never = humanOrDog2;
        break;
}
