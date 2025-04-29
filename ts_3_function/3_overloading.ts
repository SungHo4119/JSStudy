/**
 * Overloading
 */
/**
 * 파라미터를
 * 1) 하나를 받거나
 * 2) 세개를 받는 함수
 */

function stringOrstrins(members: string): string;
function stringOrstrins(member1: string, member2: string, member3: string): string;

/**
 * 만약에 하나의 파라미터만 입력 받는다면
 * 아이돌 맴버를 하나의 스트링으로 입력 받는다.
 * 예) '안유진, 장원영, 레이'
 *
 * 만약에 세개의 파라미터를 입력 받는다면
 * 각각 아이돌을 각각의 파라미터로 입력 받는다.
 * 예 ) '안유진', '장원영', '레이'
 */

function stringOrstrins(memberOrMembers: string, member2?: string, member3?: string) {
    if (member2 && member3) {
        return `아이브 맴버: ${memberOrMembers}, ${member2}, ${member3}`;
    }
    return `아이브 맴버: ${memberOrMembers}`;
}

console.log(stringOrstrins('안유진, 장원영, 레이')); // 아이브 맴버: 안유진, 장원영, 레이
console.log(stringOrstrins('안유진', '장원영', '레이')); // 아이브 맴버: 안유진, 장원영, 레이
// 오버로드에 2 인수가 필요하지 않지만, 1 또는 3 인수가 필요한 오버로드가 있습니다.ts(2575)
// console.log(stringOrstrins('안유진', '장원영')); //  아이브 맴버: 안유진
