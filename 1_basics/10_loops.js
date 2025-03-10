/**
 * Loops
 * 1) for
 * 2) while
 */

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let temp = '';
for (let i = 1; i < 6; i++) {
    for (let j = 0; j < i; j++) {
        temp += '*';
    }
    console.log(temp);
    temp = '';
}

const yuJin = {
    name: '안유진',
    yaer: 2003,
    group: '아이브',
};

for (let key in yuJin) {
    console.log(key, yuJin[key]);
}

const iveMembersArray = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];
for (let index in iveMembersArray) {
    console.log(index, iveMembersArray[index]);
}

/**
 * for of
 */
for (let value of iveMembersArray) {
    console.log(value);
}
/** dict은 안돼~
for (let value of yuJin) {
    console.log(value);
}
*/

/**
 * break
 */
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log('i는 ' + i + '입니다 : 종료');
        break;
    }
    console.log(i);
}

/**
 * continue
 */

for (let i = 0; i < 10; i++) {
    if (i !== 7) {
        continue;
    }
    console.log('i는 ' + i + '입니다');
}
