/**
 * Type and Interface
 *
 */
/**
 * Type
 *
 * * 타입은 쉽게 TS의 타입에 이름을 지어주는 역할을한다
 */
type NewStringType = string;
type newNullType = null;
type newNumberType = number;

type MaleOrFemale = 'male' | 'female';

const stringVar: NewStringType = 'test';

type IdoleType = {
    name: string;
    year: number;
};

const yuJin: IdoleType = {
    name: 'Yujin',
    year: 2002,
};

/**
 * Interface
 *
 * 인터페이스는 타입보다 늦게 생겼고 타입에서 할 수 없는 일을 할 수 있다...?
 * 인터페이스는 기본적으로 객체형테로 들어간다, 티압처럼 primitive를 나열 할 수없다. ex) MaleOrFemale
 *
 */
interface IdoleInterface {
    name: string;
    year: number;
}
const yuJin2: IdoleInterface = {
    name: '안유진',
    year: 2002,
};

interface IdoleIT {
    name: NewStringType;
    year: newNumberType;
}

const yuJin3: IdoleIT = {
    name: '안유진',
    year: 2002,
};

interface IdoleOptional {
    name: string;
    yaer?: number;
}
const yuJin4: IdoleOptional = {
    name: '안유진',
};
