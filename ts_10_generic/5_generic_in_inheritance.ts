/**
 * Generic in Inheritance
 */
class BaseCache<T> {
    data: T[] = [];
}

class StringCache extends BaseCache<string> {}

const stringCache = new StringCache();

// BaseCache<string>를 상속 받았기 때문에 string으로
stringCache.data; // string[]

class GenericChild<T, Message> extends BaseCache<T> {
    message?: Message;
    constructor(message?: Message) {
        super();
        this.message = message;
    }
}

const genericChild = new GenericChild<string, string>();

genericChild.data; // string[]
genericChild.message; // string | undefined

/**
 * generic inheritance
 */
interface BaseGeneric {
    name: string;
}

class Idol<T extends BaseGeneric> {
    infomation: T;
    constructor(infomation: T) {
        this.infomation = infomation;
    }
}

// Idol은 BaseGeneric을 상속 받았기 때문에 name property를 반드시 가지고있어야한다.
const yuJin = new Idol({
    name: 'Yujin',
    age: 20,
});

/**
 * keyof 함께 사용하기
 */
const testObj = {
    a: 1,
    b: 2,
    c: 3,
};

function objectParser<O, K extends keyof O>(obj: O, key: K): O[K] {
    return obj[key];
}

const val = objectParser(testObj, 'a');

/**
 * Ternary
 * 1 === 2 ? true: false
 */

class Idol2 {
    type?: string;
}
class FemaleIdol extends Idol2 {
    type: 'Female Idol' = 'Female Idol';
}
class MaleIdol extends Idol2 {
    type: 'Male Idol' = 'Male Idol';
}

type SpecificIdol<T extends Idol2> = T extends MaleIdol ? MaleIdol : FemaleIdol;

const idol: SpecificIdol<FemaleIdol> = new FemaleIdol();
