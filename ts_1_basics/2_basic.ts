/**
 * Types
 */
let helloText: string = 'Hello';

/**
 * 7개의 타입
 */
const stringVar: string = 'String';
const numberVar: number = 3;
// es 2016버전은 없어서 2020 이상으로 추가
const bigIntVar: bigint = BigInt(9000000);
const booleanVar: boolean = true;
const nullVar: null = null;
const undefinedVar: undefined = undefined;

/**
 * TS에만 존재하는 타입
 */
// any - 아무 타입이나 입력 할 수 있는 치트키..
// 다만 많이사용하는경우 타입스크립트를 사용하는 의미가없어진다.
let anyVar: any;
anyVar = true;
// any타입은 다른 모든 타입에 값을 저장할 수 있다.
let testNumber: number = anyVar;

// unknown - 알 수 없는 타입
// 다른 모든 값을 넣을 수 있다 하ㅣ만 다른 값에 대입하기 위해서는 타입 검증을 반드시 해야한다.
// 에니 타입 제외
let unknown: unknown;
unknown = 'hello';
unknown = 3;
// 대입하기 위해서 필요한 검증을 진행 후에 대입
let testNumber2: number = typeof undefinedVar === 'number' ? (unknown as number) : 0;

// never - 어떠한 값도 저장되거나 반환되지 않을때 사용하는 타입
// let neverType: never = null;

/**
 * 리스트 타입
 */
const koreanGirlGroup: string[] = ['아이브', '레드벨벳', '블랙핑크'];
const koreanGirlGroup2: Array<string> = ['아이브', '레드벨벳', '블랙핑크'];
