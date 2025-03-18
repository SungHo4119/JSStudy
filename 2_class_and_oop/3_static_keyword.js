/**
 * Static Keyworkd
 */
// class IdolModel {
//     name;
//     year;
//     static grouopName = '아이브';
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
//     static returnGroupName() {
//         return '아이브';
//     }
// }

// const yuJin = new IdolModel('안유진', 2003);
// console.log(yuJin);
// console.log(IdolModel.grouopName);
// console.log(IdolModel.returnGroupName());

/**
 * factory constructor
 */
class IdolModel {
    name;
    year;
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    static fromObject(object) {
        return new IdolModel(object.name, object.year);
    }
}

const yuJin2 = IdolModel.fromObject({ name: '안유진', year: 2023 });
console.log(yuJin2);
