/**
 * Reflection and Decorator
 */
import 'reflect-metadata';

// Symbol로 선언 함으로써 같은 값을 존재하지 못하도록 한다.
const restrictParamValueKey = Symbol('restrictParamValueKey');

interface RestrictionInfo<T> {
    index: number;
    restrictedValues: T[];
}

function RestrictParamValue<T>(restrictedValues: T[]) {
    return (target: any, propertyKey: string, index: number) => {
        // target : Idol 클래스의 protortype
        // propertyKey: 메서드 이름 ( 파라미터에 데코레이터르 작성했기 때문에 )
        const prevMeta = Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey) ?? [];

        const info: RestrictionInfo<T> = {
            index,
            restrictedValues,
        };

        Reflect.defineMetadata(restrictParamValueKey, [...prevMeta, info], target, propertyKey);

        console.log(Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey));
    };
}

function ValidateMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const metas: RestrictionInfo<any>[] = Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey) ?? [];

    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const invalids = metas.filter(mata => !mata.restrictedValues.includes(args[mata.index]));

        if (invalids.length > 0) {
            throw Error(`Invalid parameter value. ${invalids.map(x => args[x.index]).join(', ')}`);
        }
        return originalMethod.apply(this, args);
    };
}

class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    @ValidateMethod
    // style에는 '신나게' | '열정적으로'  값만 입력 가능하다. ( 가정 )
    sing(@RestrictParamValue(['신나게', '열정적으로']) style: string, @RestrictParamValue([1, 2, 3]) rank: number) {
        return `${this.name} is singing in ${style} style`;
    }
}

const yuJin = new Idol('유진', 20);

console.log('--- sing ---');
console.log(yuJin.sing('신나게', 1));
console.log('--- sing2 ---');
console.log(yuJin.sing('열정적으로', 2));
console.log('--- sing3 ---');
console.log(yuJin.sing('슬프게', 4));
