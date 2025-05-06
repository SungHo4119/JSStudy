/**
 * Generic in Implementation
 */

interface Singer<T, V> {
    name: T;
    sing(yaer: V): void;
}

class Idol implements Singer<string, number> {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sing(yaer: number): void {
        console.log(`${this.name} is singing ${yaer} years ago`);
    }
}

const yuJin = new Idol('안유진');
yuJin.sing(2023);

class Idol2<T, V> implements Singer<T, V> {
    name: T;
    constructor(name: T) {
        this.name = name;
    }
    sing(yaer: V): void {
        console.log(`${this.name} is singing ${yaer} years ago`);
    }
}

const wonYoung = new Idol2<string, number>('장원영');
wonYoung.sing(2023);
