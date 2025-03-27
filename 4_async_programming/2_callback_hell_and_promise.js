/**
 * Callback
 */
function waitAndRun() {
    setTimeout(() => {
        console.log('끝');
    }, 2000);
}

// waitAndRun();

function waitAndRun2() {
    setTimeout(() => {
        console.log('1번 콜백 끝');
        setTimeout(() => {
            console.log('2번 콜백 끝');
            setTimeout(() => {
                console.log('3번 콜백 끝');
            }, 2000);
        }, 2000);
    }, 2000);
}
// waitAndRun2();

/**
 * Promise
 */
const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
    }, 2000);
});
// res 는 완료
// timeoutPromise.then(res => {
//     console.log('----then----');
//     console.log(res);
// });

getPromise = seconds =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('완료');
        }, seconds * 1000);
    });

// getPromise(1)
//     .then(res => {
//         console.log('--- fires then ---');
//         console.log(res);
//         return getPromise(1);
//     })
//     .then(res => {
//         console.log('--- second then ---');
//         console.log(res);
//     });

getPromise2 = seconds =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('에러');
        }, seconds * 1000);
    });
// getPromise2(1)
//     .then(res => {
//         console.log('--- fires then ---');
//         console.log(res);
//     })
//     .catch(res => {
//         console.log('--- fires catch ---');
//         console.log(res);
//     })
//     .finally(() => {
//         console.log('--- finally ---');
//     });

Promise.all([getPromise2(1), getPromise2(2), getPromise2(2), getPromise2(2)]).then(res => {
    console.log(res);
});
