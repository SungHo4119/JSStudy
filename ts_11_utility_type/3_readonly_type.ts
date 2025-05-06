/**
 * Readonly type
 */

interface Cat {
    name: string;
    age: number;
}

const nyaong: Cat = {
    name: 'Nyaong',
    age: 3,
};

nyaong.age = 4; // OK

const bori: Readonly<Cat> = {
    name: 'Bori',
    age: 2,
};
// bori.age = 3; // Cannot assign to 'age' because it is a read-only property.ts(2540)

// 같은 방법으로 JS에서 동일한 기능
Object.freeze(bori);
