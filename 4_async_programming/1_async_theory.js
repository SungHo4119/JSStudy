function longWork() {
    const now = new Date();

    const milliseconds = now.getTime();
    const afterTwoSeconds = milliseconds + 2 * 1000;

    while (new Date().getTime() < afterTwoSeconds) {}
    console.log('완료');
}

// console.log('Hello');
// longWork();
// console.log('World');

function longWork2() {
    // 비동기로 실행되는 함수 ( 기본 )
    setTimeout(() => {
        console.log('완료');
    }, 2000);
}

console.log('Hello');
longWork2();
console.log('World');

// 자바스크립트는 싱글스레드
// call stack , memory Heap이 구성되어있다.

/**
 * 이전 실행 컨텍스트에서 CallStack에 있는건 처음에 들어간게 마지막에 완료되는구조였는데 이건 동기 방식이고
 * 비동기 방식은 Task Queue / Event Queue로 옮겨지게 된다. ( Call Stack 과는 상관없이 )
 *
 * 이벤트 루프는 자바스크립트 런타임이 생성되는 순간부터 Task Queue를 계속 바라보면서 실행이 종료가된 함수가 있는지 확인하고
 * Call Stack이 종료가 됬는지 계속확인한다.
 * Call Stack이 비어있으면 Task Queue에 완료된 함수를 Call Stack으로 옮기고 동기로 실행해야하는 작업 ( 응답등 )을 하고 함수가 완료된다.
 */
