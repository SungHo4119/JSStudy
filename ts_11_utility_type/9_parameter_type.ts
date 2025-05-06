/**
 * Parameter Type
 */

function sampleFunction(x: number, y: string, z: boolean) {
    console.log(x, y, z);
}

//type Params = [x: number, y: string, z: boolean]
type Params = Parameters<typeof sampleFunction>;

// 아래처럼 함수의 파라메터를 타입으로 적용하여 변수에 적용가능
// Type '[number, string]' is not assignable to type '[x: number, y: string, z: boolean]'.
//   Source has 2 element(s) but target requires 3.ts(2322)
// const params: Params = [1, 'hello'];

// type Params2 = [one: number];
type Params2 = Parameters<(one: number) => void>;
