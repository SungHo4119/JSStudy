/**
 * Array Function
 */
let iveMembers = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];

console.log(iveMembers);
console.log('--------------------');
/**
 * 다음 console.log('--------------------'); 전까지는 기존의 배열의 값을 직접 수정하는 함수
 * 실무에서 많이 사용하지 않음
 */
// push - 맨 뒤에 추가
console.log(iveMembers.push('코드펙토리')); // 7 - 추가한 길이를 반환
console.log(iveMembers); // + 코드펙토리

// pop() - 마지막 값을 가져오고 삭제
console.log(iveMembers.pop()); // 코드펙토리;
console.log(iveMembers);

// shift() - 첫번째 값을 가져오고 삭제
console.log(iveMembers.shift()); // 안유진;
console.log(iveMembers);

// unshift() - 첫번째에 값을 추가
console.log(iveMembers.unshift('안유진')); // 추가한 길이를 반환
console.log(iveMembers);

// splice
console.log(iveMembers.splice(0, 3)); // 0~2 번째 값을 삭제 ( 삭제한 값을 반환 )
console.log(iveMembers);

console.log('--------------------');
iveMembers = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];
/**
 * 새로운 메모리에 값을 복사해서 반환하는 함수들
 */
// concat - array에 추가
console.log(iveMembers.concat('코드팩토리'));

// slice() - splice와 응답값은 같으나 실제 값을 삭제하진 않음
console.log(iveMembers.slice(0, 3));

// spread operator
let iveMembers2 = [...iveMembers];
console.log(iveMembers2); // [ '안유진', .... ]

let iveMembers3 = [iveMembers];
console.log(iveMembers3); // [['얀유진' .... ]]

let iveMembers4 = iveMembers;

console.log(iveMembers4 === iveMembers); //true

console.log([...iveMembers4] === iveMembers); // false
iveMembers4.pop();
console.log(iveMembers); // iveMembers4와 같은 메모리공간을 가지고있기 때문에 5명
console.log(iveMembers4); // 하나 제거해서 5명

console.log('--------------------');
iveMembers = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];
console.log(iveMembers.join()); // 안유진,가을,레이,장원영,리즈,이서
console.log(iveMembers.join('/')); // 안유진/가을/레이/장원영/리즈/이서
console.log(iveMembers.join(', ')); // 안유진, 가을, 레이, 장원영, 리즈, 이서
console.log(iveMembers.join(', ')); // 안유진, 가을, 레이, 장원영, 리즈, 이서

console.log(iveMembers.sort()); // [ '가을', '레이', '리즈', '안유진', '이서', '장원영' ]
console.log(iveMembers.reverse()); // [ '장원영', '이서', '안유진', '리즈', '레이', '가을' ]

let number = [1, 9, 7, 6, 4];
// a,b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에두려면) 0보다 큰 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
number.sort((a, b) => {
    // 오름차순
    return a > b ? 1 : -1;
});
console.log(number);

number.sort((a, b) => {
    // 내림차순
    return a > b ? -1 : 1;
});
console.log(number);
console.log('--------------------');

// map()
console.log(iveMembers.map(x => x));
console.log(iveMembers.map(x => `아이브: ${x}`));

console.log(
    iveMembers.map(x => {
        if (x === '안유진') {
            return `아이브: ${x}`;
        } else {
            return x;
        }
    }),
);

console.log('--------------------');
number = [1, 9, 7, 6, 4];
// filter() 조건이 true인 모든값
console.log(number.filter(x => true));
console.log(number.filter(x => false));

console.log(number.filter(x => x % 2 === 0));

// find() 조건이 true인 먼저 발견된값
console.log(number.find(x => x % 2 === 0));

// findIndex() 조건이 true인 먼저 발견된값의 index
console.log(number.findIndex(x => x % 2 === 0));

// reduce(p,n)
/**
 * reduce(p,n)
 * number = [1, 9, 7, 6, 4];
 * p : 이전 값
 * n : 다음 값
 *
 * 1. 초기값 0이 P에 입력이된다
 * 2. number 배열의 첫번재 값이 n에 입력이된다(9)
 * 3. p+n 즉 0 + 9 의 결과 값인 9가 반환된다.
 * 4. p의 값은 9, number배열의 두번째 값인 7이 n이 된다
 * 3~4 반복한다 (마지막까지)
 * 1+9+7+6+4 = 27
 **/
console.log(number.reduce((p, n) => p + n, 0));
