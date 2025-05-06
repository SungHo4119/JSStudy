/**
 * Required Type
 */

interface Dog {
    name: string;
    age?: number;
    country?: string;
}

// Required는 모든 속성을 필수로 만듬
const requiredDog: Required<Dog> = {
    name: 'dog',
    age: 1,
    country: 'korea',
};
