/**
 * Object Union
 */

/**
 * 유추된 객체 타입 유니언
 */
const dogOrCat = Math.random() > 0.5 ? { name: 'dog', age: 12 } : { name: 'cat', breed: '코리안 길냥이' };

dogOrCat.name; //name: string
dogOrCat.age; // age?: number | undefined
dogOrCat.breed; // breed?: string | undefined

interface Dog {
    name: string;
    age: number;
}
interface Cat {
    name: string;
    breed: string;
}

type DogOrCat = Dog | Cat;

const dogOrCat2: DogOrCat = Math.random() > 0.5 ? { name: 'dog', age: 12 } : { name: 'cat', breed: '코리안 길냥이' };
dogOrCat2.name; // name: string
// 'DogOrCat' 형식에 'age' 속성이 없습니다.
//   'Cat' 형식에 'age' 속성이 없습니다.ts(2339)
// dogOrCat2.age;

if ('age' in dogOrCat2) {
    dogOrCat2.age; // (property) Dog.age: number
} else {
    dogOrCat2.breed; //  Cat.breed: string
}
