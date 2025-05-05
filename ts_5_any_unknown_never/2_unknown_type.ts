/**
 * Unknown Type
 */
let anyValue: any;

anyValue = 10;
anyValue = 'Hello';
anyValue = true;
anyValue = { name: 'John' };
anyValue = [];

let unknownValue: unknown;

unknownValue = 10;
unknownValue = 'Hello';
unknownValue = true;
unknownValue = { name: 'John' };
unknownValue = [];

// let anyType: any = anyValue;
// let unknownType: unknown = anyValue;
// let booleanType: boolean = anyValue;
// let stringType: string = anyValue;
// let numberType: number = anyValue;
// let objectType: object = anyValue;
// let arrayType: any[] = anyValue;
// let functionType: Function = anyValue;
// let voidType: void = anyValue;
// let nullType: null = anyValue;
// let undefinedType: undefined = anyValue;

let anyType: any = unknownValue;
let unknownType: unknown = unknownValue;
// 'unknown' 형식은 'boolean' 형식에 할당할 수 없습니다.ts(2322)
// let booleanType: boolean = unknownValue;
//'unknown' 형식은 'string' 형식에 할당할 수 없습니다.ts(2322)
// let stringType: string = unknownValue;
// ...

// anyValue.toUpperCase(); // OK

//'unknownValue'은(는) 'unknown' 형식입니다
// unknownValue.toUpperCase(); // Error: Object is of type 'unknown'.

function isString(target: unknown): target is string {
    return typeof target === 'string';
}

let testValeue: unknown;

if (isString(testValeue)) {
    testValeue; // string
}

/**
 * Union Type
 */

type uOrString = unknown | string; // unknown
type uOrNumber = unknown | number; // unknown
type uOrBoolean = unknown | boolean; // unknown
type uOrAny = unknown | any; // any
type AnyOrU = any | unknown; // any

/**
 * Intersection Type
 */
type uAndString = unknown & string; // string
type uAndNumber = unknown & number; // number
type uAndBoolean = unknown & boolean; // boolean
type uAndAny = unknown & any; // any
type AnyAndU = any & unknown; // any

/**
 * Operator 사용
 */
let number1: unknown = 10;
let number2: unknown = 20;

// number1 + number2; //error

// 사용가능한 4가지
number1 === number2;
number1 !== number2;
number1 == number2;
number1 != number2;
