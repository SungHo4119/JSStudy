/**
 * Infer Keyword
 * 유추하다.
 *
 * Inferring Type in Conditional Type
 *
 * Infer Keyword는 Conditional Type에서만 사용 가능한 키워드다.
 * 그러니 extends 키워드를 사용했을 때 extend 한 대상에서 타입을 한번더 추론하는 역활을 한다.
 *
 */

//1) 가장 많이 사용하는 예제
// Flattening -> array를 벗겨낼 때
// string [][] => string[]
// string [] => string

type Flatten<Type> = Type extends Array<string> ? string : Type;

type StringArray = Flatten<string[]>; // string
type NumberArray = Flatten<number[]>; // number[]

type Flatten2<Type> = Type extends Array<infer ElementType> ? ElementType : Type;
type Flatten3<Type> = Type extends (infer ElementType)[] ? ElementType : Type;

type StringArray2 = Flatten2<string[]>; // string
type NumberArray2 = Flatten2<number[]>; // number
type TwoDArray = Flatten3<boolean[][]>; // boolean

// 2) Return Type 추론
type InferReturnType<Type> = Type extends (...args: any) => string ? string : Type;
type NumberArray3 = InferReturnType<number[]>; // number[]
type StringFunction = InferReturnType<() => string>; // type StringFunction = string
type NumberFunction = InferReturnType<() => number>; // type NumberFunction = () => number

type InferReturnType2<Type> = Type extends () => infer ReturnType ? ReturnType : Type;
type NumberArray4 = InferReturnType2<number[]>; // number[]
type StringFunction2 = InferReturnType2<() => string>; // type StringFunction2 = string
type NumberFunction2 = InferReturnType2<() => number>; // type NumberFunction2 = number
