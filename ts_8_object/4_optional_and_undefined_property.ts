/**
 * Optional and Undefined Properties
 */

interface Dog {
    name: string;
    age: number;
    breed?: string;
}

const byulE: Dog = {
    name: 'ByulE',
    age: 3,
    breed: 'Shih Tzu',
};

const ori: Dog = {
    name: 'Ori',
    age: 2,
};

interface Cat {
    name: string;
    age: number;
    breed: string | undefined;
}
const nabi: Cat = {
    name: 'Nabi',
    age: 2,
    // breed ?: string이 아니기 때문에 undefined를 직접 넣어줘야한다 옵션이아님
    // 'breed' 속성이 '{ name: string; age: number; }' 형식에 없지만 'Cat' 형식에서 필수입니다.ts(2741)
    breed: undefined,
};
