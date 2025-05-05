/**
 * Extension
 */
interface IName {
    name: string;
}

interface IIdol extends IName {
    age: number;
}

const idol: IIdol = {
    name: '안유진',
    age: 20,
};

type Tname = {
    name: string;
};

type TIdol = Tname & {
    age: number;
};
const idol2: TIdol = {
    name: '안유진',
    age: 20,
};

// interface와 type alias는 서로 확장할 수 있다.
interface IIdol2 extends Tname {
    age: number;
}

const idol3: IIdol2 = {
    name: '안유진',
    age: 20,
};

type TIdol2 = IName & {
    age: number;
};
const idol4: TIdol2 = {
    name: '안유진',
    age: 20,
};

/**
 * extending multiple
 */
type DogName = {
    name: string;
};
type DogAge = {
    age: number;
};
type DogBreed = {
    breed: string;
};
type Dog = DogName & DogAge & DogBreed;

const dog: Dog = {
    name: '멍멍이',
    age: 3,
    breed: '진돗개',
};

interface CatName {
    name: string;
}
interface CatAge {
    age: number;
}

interface Cat extends CatName, CatAge {
    breed: string;
}
const cat: Cat = {
    name: '야옹이',
    age: 2,
    breed: '코리안숏헤어',
};

/**
 * Overring
 */
type THeight = {
    height: number;
};

type TRectangle = THeight & {
    height: string;
    width: number;
};

// const recangle: TRectangle = {
//     height: '100px', // height 가 중복 선언되 었고 string && number 타입은 존재하지 않음으로 never 타입이 된다.
//     width: 200,
// };

type TWidth = {
    width: number | string;
};

type TRectangle2 = TWidth & {
    height: number;
    width: string;
};

const rectangle: TRectangle2 = {
    height: 100, // 유니온을 사용하여 number타입으로 네로잉됨
    width: '200px',
};

interface IHeight {
    height: number;
}

// 'IRectangle' 인터페이스가 'IHeight' 인터페이스를 잘못 확장합니다.
//   'height' 속성의 형식이 호환되지 않습니다.
//     'string' 형식은 'number' 형식에 할당할 수 없습니다.ts(2430)
// interface IRectangle extends IHeight {
//     width: number;
//     height: string;
// }

interface IWidth {
    width: number | string;
}
interface IRectangle2 extends IWidth {
    width: number | string;
    height: number;
}

// type의 경우 never 타입이 나오더라도 extend가 가능하다
// interface의 경우 never 타입이 나오는경우 extend가 불가능하다
