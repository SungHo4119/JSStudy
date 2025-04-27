/**
 * Enum
 */
/**
 * API 요청을 한다.
 * 상태는 4가지 상태
 *
 * DONE - 요청 완료
 * ERROR - 에러 발생
 * LOADING - 로딩 상태
 * INITIAL - 초기 상태
 */
enum State {
    DONE = 'DONE',
    ERROR = 'ERROR',
    LOADING = 'LOADING',
    INITIAL = 'INITIAL',
}
// enum에 = 'DONE' 이런걸 안붙이고 DONE,ERROR, 이렇게만하면 나중에 결과 0,1,2,3 이런식으로 나옴

function runWokr() {
    let state = State.INITIAL;
    try {
        state = State.LOADING;
        state = State.DONE;
    } catch (error) {
        state = State.ERROR;
    } finally {
        state = State.DONE;
    }
    return state;
}

console.log(runWokr());
