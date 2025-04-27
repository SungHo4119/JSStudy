/**
 * Js의 문점
 *
 * dynamicall typed
 */
function add(var1, var2) {
    return var1 + var2;
}

console.log(add(1, 2));

console.log(add(1, '2'));
console.log(add('1', '2'));

/**
 * 방법1
 * - Comment를 작성하다 (강제성이없다...)
 * var1 : number
 * var2 : number
 */

function add2(var1, var2) {
    return var1 + var2;
}

console.log(add2(1, 2));

console.log(add2(1, '2'));
console.log(add2('1', '2'));

/**
 * 방법2 - typeof를 이용해 타입체크를 진행한다.
 * - 처리해야할 코드가 많아진다...
 */
function add3(var1, var2) {
    if (typeof var1 === 'number' && typeof var2) {
        return var1 + var2;
    } else {
        throw Error('숫자만 처리');
    }
}

console.log(add3(1, '2'));
