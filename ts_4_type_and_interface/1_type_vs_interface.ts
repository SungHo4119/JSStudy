/**
 * Type vse Interface
 */
interface IObject {
    x: number;
    y: number;
}

type TObject = {
    x: number;
    y: number;
};

// function을 선언할때
interface IFunction {
    (x: number, y: number): number;
}

type TFunction = (x: number, y: number) => number;

/**
 * Type에서는 할 수 있지만
 * Interface에서는 할 수 없는 것
 */
// 1. Primitive Type 선언하기
type Name = string;

// 2. Union Type 선언하기
type unionType = string | number;

// 3. Primitive list 또는 tuple 선언하기
type tupleType = [number, string];

/**
 * Interface에서는 할 수 있지만
 * Type에서는 할 수 없는 것
 */
// interface merging
interface IRectangle {
    height: number;
}
interface IRectangle {
    width: number;
}
// 인터페이스를 중복선언했을 때 중첩된다(합쳐진다.)
// 타입의 경우 선언이 안된다.
let rectangle: IRectangle = {
    width: 10,
    height: 20,
};
/**
 * Interface Merging
 */
class Review {
    // 프로퍼티
    getY = (y: number) => {
        return y;
    };
    // 메서드
    getX(x: number) {
        return x;
    }
}

// 프로퍼티는 오버로딩이 안된다.
interface GetXnY {
    getX: (x: number) => number;
    getY: (y: number) => number;
}

interface GetXnY {
    getX: (x: number) => number;
    //     후속 속성 선언에 같은 형식이 있어야 합니다. 'getY' 속성이 '(y: number) => number' 형식이어야 하는데 여기에는 '(y: string) => number' 형식이 있습니다.ts(2717)
    // 1_type_vs_interface.ts(67, 5): 여기서도 'getY'이(가) 선언되었습니다.
    // getY: (y: string) => number;
}

// 메서드는 오버로딩이 된다.
interface GetXnY2 {
    getX(x: number): number;
    getY(y: number): number;
}

interface GetXnY2 {
    getX(x: number): number;
    getY(y: string): number;
}

const testMethod: GetXnY2 = {
    //(method) GetXnY2.getX(x: number): number (+1 overload)
    getX(x) {
        return x;
    },
    //     '(y: string | number) => string | number' 형식은 '{ (y: number): number; (y: string): number; }' 형식에 할당할 수 없습니다.
    //   'string | number' 형식은 'number' 형식에 할당할 수 없습니다.
    //     'string' 형식은 'number' 형식에 할당할 수 없습니다.ts(2322)
    // 1_type_vs_interface.ts(76, 5): 필요한 형식은 여기에서 'GetXnY2' 형식에 선언된 'getY' 속성에서 가져옵니다.
    // return y 일 떄 위의 오류 발생
    getY(y) {
        return 1;
    },
};
