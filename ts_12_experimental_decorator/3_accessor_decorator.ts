/**
 * Accessor Decorator
 */
class Rectangle {
    #height: number;
    #width: number;

    constructor(height: number, width: number) {
        this.#height = height;
        this.#width = width;
    }
    @Configurable(false)
    get height() {
        return this.#height;
    }

    @Configurable(true)
    get width() {
        return this.#width;
    }
}

function Configurable(configurable: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        //configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다. false일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금진된다
        descriptor.configurable = configurable;
    };
}

const rectangle = new Rectangle(10, 20);

console.log(Object.getOwnPropertyDescriptors(Rectangle.prototype));
