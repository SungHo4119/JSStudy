/**
 * method decorator
 */
class Idol {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    @TestMethodDecorator
    @Configurable(false)
    @MethodCallLogger('production')
    dance() {
        return `${this.name} is dancing`;
    }
}

// target: static method에 데코레이팅 할 경우 생성자 함수
//         instance method에 데코레이팅 할 경우 인스턴스의 prototype
//
// propertyKey: 메서드 이름
// decorator: 메서드의 descriptor
function TestMethodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('LogCall');
    console.log('--- target ---');
    console.log(target);
    console.log('--- propertyKey ---');
    console.log(propertyKey);
    console.log('--- descriptor ---');
    console.log(descriptor);
}

const rose = new Idol('Rose');
console.log('---- dance ----');
console.log(rose.dance());
// 메서드에서도 선언이 될 때 한번만 실행이 된다.

function Configurable(Configurable: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        //configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다. false일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금진된다
        descriptor.configurable = Configurable;
    };
}

console.log('---- getOwnPropertyDescriptors ----');
console.log(Object.getOwnPropertyDescriptors(Idol.prototype));

// 함수 바꾸기
function MethodCallLogger(env: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        // descriptor.value 는 dance함수의 { value: [Function: dance], ... }
        const orignalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            console.log(`[${env}] running function ${propertyKey} with args: ${args}`);

            const result = orignalMethod.apply(this, args);
            // orignalMethod는 기존 decorator가 적용된 dance함수로 응답값이 있는경우 동일하게 return 해줘야한다.
            return result;
        };
    };
}

// MethodCallLogger는 다른 데코레이터와 다르게 함수 호출시 마다 실행된다.
// 이유는 descriptor.value의 value를 바꿨기 때문에
console.log(rose.dance());
