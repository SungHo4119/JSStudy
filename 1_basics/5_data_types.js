/**
 * Data Types
 *
 * 여섯개의 Primitive Type과
 * 한개의 오브젝트 타입.
 *
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean
 * 4) undefind
 * 5) null
 * 6) Symbol
 *
 * 7) Object (객체)
 *      - Function
 *      - Array
 *      - Object
 *
 */

// 1) Number
const age = 32;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log('--------------');

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);
console.log('--------------');

// String
const codeFactory = '코드팩토리';
const ive = "'아이브'";
const ive2 = '"아이브2"';
console.log(codeFactory);
console.log(ive);
console.log(ive2);

/**
 * Template Literal
 * Escaping Character
 *
 * 1) new line - \n
 * 1) tab - \t
 */

const iveYuJin = '아이브\n안유진';
console.log(iveYuJin);

const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung);

console.log(typeof iveYuJin);
console.log(typeof iveWonYoung);

const iveWonYoung2 = `아이브 '"/ / /
장원영`;
console.log(iveWonYoung2);
console.log(`${ive} 안유진`);
console.log('--------------');
/**
 * Boolean
 */
const isTrue = true;
const isFalse = false;

console.log(isTrue, isFalse);
console.log(typeof isTrue);
console.log('--------------');
/**
 * undefind
 * 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값
 *
 * 직접 undefind로 값을 초기화 하는건 지양해야한다.
 */
let noInit;
console.log(typeof noInit);
console.log('--------------');

/**
 * null 타입
 *
 * undefind와 마찬가지로 값이 없다는 뜻
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화 할 때 사용
 */
let init = null;
console.log(init);
console.log(typeof init); // Object 타입으로 나오지만 이건 버그다 ( 하지만 변경 되진않는다.. )
console.log('--------------');

/**
 * Symboe 타입
 *
 * 유일무이한 값을 생성할때 사용한다.
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 호출해서 사용한다.
 */

const test1 = '1';
const test2 = '1';
console.log(test1 == test2);

const symbol1 = Symbol(1);
const symbol2 = Symbol(1);
console.log(symbol1 == symbol2);
console.log('--------------');

/**
 * Object 타입
 *
 * Map
 * 키 : 벨류의 쌍으로 이루어져있다.
 * key:value
 */

const dictionary = {
    red: '빨간색',
    orange: '주황색',
    yeellow: '노란색',
};

console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yeellow']);
console.log(typeof dictionary);
console.log(typeof dictionary['red']);
console.log('--------------');

/**
 * Array
 * 값을 리스트로 나열 할 수 있는 타입
 */
const memberArray = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];
console.log(memberArray);
console.log(typeof memberArray);
console.log(memberArray[0]);

memberArray[0] = '코드팩토리';
console.log(memberArray[0]);

/**
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시한다.
 *
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 추론한다.
 * JS는 dynamic typing
 */
