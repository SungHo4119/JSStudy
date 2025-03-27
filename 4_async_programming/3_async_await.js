/**
 * Async / Await
 */
const getPromise = seconds =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('완료');
        }, seconds * 1000);
    });

async function runner() {
    const result = await getPromise(2); // await를 사용했다해서 막지 다른 함수의 실행을 막지 않는다.
    console.log(result);
}
runner();
console.log('실행 끝');
// 실행 끝
// 완료
