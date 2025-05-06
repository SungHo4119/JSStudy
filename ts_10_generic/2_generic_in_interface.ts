/**
 * Generic in Interface
 */
interface Cache<T> {
    data: T[];
    lastUpdate: Date;
}

const cache1: Cache<string> = {
    data: ['a', 'b', 'c'],
    lastUpdate: new Date(),
};

console.log(cache1);

// 인터페이스를 넣지않으면
// Generic type 'Cache<T>' requires 1 type argument(s).ts(2314) 오류가 발생한다.
// const cache2: Cache = {
//     data: [1, 2, 3],
//     lastUpdate: new Date(),
// };

interface DefaultGeneric<T = string> {
    data: T[];
}
const cache: DefaultGeneric = {
    data: ['123', '456'],
};

// Type 'number' is not assignable to type 'string'.ts(2322)
// 정의 해주지않으면 string임으로 오류발생
// const cacheNumber: DefaultGeneric = {
//     data: [123, 456],
// };
