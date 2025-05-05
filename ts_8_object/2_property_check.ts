/**
 * Property Check
 * 초과 속성 검사
 */
type TName = {
    name: string;
};

type TAge = {
    age: number;
};

// iu에 Tname, TAge를 할당 할 수없다.
const iu = {
    name: 'iu',
    age: 30,
};

// iu를 TName, TAge를 할당 할 수 있다. 내부 속성을 가지고 있기 때문에...
const testName: TName = iu;
const testAge: TAge = iu;

// testName는 온전히 TName 이라고 할 수없다.
console.log(testName); // { name: 'iu', age: 30 }
