/**
 * Reflection Metadata
 */
import 'reflect-metadata';

const iu = {
    name: 'iu',
    age: 18,
    nationality: 'korean',
};

console.log(iu);

/**
 * 파라미터의 정의
 * 1) 메타데이터의 키
 * 2) 메타데이터 키에 저장할 값
 * 3) 메타 데이터를 저장할 객체
 * 4) 메타데이터를 저장할 객체의 프로퍼티 ( 옵션 )
 *
 * 메타데이터가 무엇인가? - 데이터에 대한 데이터
 */
Reflect.defineMetadata('test-meta', 123, iu);

console.log(iu); // { name: 'iu', age: 18, nationality: 'korean' }

console.log(Reflect.getMetadata('test-meta', iu)); // 123

Reflect.defineMetadata('test-meta', 456, iu);
console.log(Reflect.getMetadata('test-meta', iu)); // 456

Reflect.defineMetadata('meta', 789, iu);
console.log(Reflect.getMetadata('meta', iu)); // 789

Reflect.defineMetadata('meta', { name: '코드팩토리' }, iu);
console.log(Reflect.getMetadata('meta', iu)); // { name: '코드팩토리' }

/**
 * 프로퍼티에 저장하기
 */
// 아이유 객체에 name 프로퍼티에 메타데이터 저장하기
console.log('---------');
Reflect.defineMetadata('object-meta', 999, iu, 'name');
console.log(Reflect.getMetadata('object-meta', iu, 'name')); // 999
console.log(Reflect.getMetadata('object-meta', iu)); // undefined

// 메타데이터 가져오기
console.log('---------');
console.log(Reflect.hasMetadata('object-meta', iu, 'name')); // true
console.log(Reflect.getMetadataKeys(iu)); // [ 'test-meta', 'meta' ]
console.log(Reflect.getMetadataKeys(iu, 'name')); // [ 'object-meta' ]

// 메타데이터 삭제하기
console.log('---------');
Reflect.deleteMetadata('test-meta', iu);
console.log(Reflect.getMetadata('object-meta', iu, 'name')); // 999
Reflect.deleteMetadata('object-meta', iu, 'name');
console.log(Reflect.getMetadata('object-meta', iu, 'name')); // undefined

// Own : 자기자신의 메타데이터
console.log('---------Own');
// 프로토타입에 메타데이터 저장
Reflect.defineMetadata('prototype-data', 'prototype', Object.getPrototypeOf(iu));
console.log(Reflect.getMetadataKeys(iu)); // [ 'meta', 'prototype-data' ]
console.log(Reflect.getOwnMetadataKeys(iu));
