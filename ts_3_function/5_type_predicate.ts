/**
 * type Predicate
 */
function isNumber(input: any): input is number {
    return typeof input === 'number';
}

console.log(isNumber(123)); // true

function isNumberRetBool(input: any): boolean {
    return typeof input === 'number';
}

let number: any = 5;
if (isNumberRetBool(number)) {
    number; // type is any
}

if (isNumber(number)) {
    number; // type is number
}

interface Doge {
    name: string;
    age: number;
}

interface Cat {
    name: string;
    breed: string;
}

type DogeOrCat = Doge | Cat;

// is Doge를 반환하는것으로 사용할때 타입을 명확하게 사용할 수있다. ( 타입가드 - 네로잉 )
function isDoge(animal: DogeOrCat): animal is Doge {
    return (animal as Doge).age !== undefined;
}

const doge: DogeOrCat =
    Math.random() > 0.5
        ? {
              name: 'doge',
              age: 5,
          }
        : { name: 'cat', breed: 'persian' }; // type is DogeOrCat
if (isDoge(doge)) {
    doge; // type is Doge
} else {
    // 위에서 확률로 도지만 넣었다면 Naver
    doge; // type is Cat
}
