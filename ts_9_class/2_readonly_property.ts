/**
 * readonly property
 */
class Idol {
    readonly name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const yuJin = new Idol('Yujin', 20);
yuJin.age = 21; // OK
// Cannot assign to 'name' because it is a read-only property.ts(2540)
// yuJin.name = 'Yujin2';
