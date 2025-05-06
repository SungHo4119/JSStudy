/**
 * Export
 */
class IdolModel {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
// 파일 당 하나의 export default만 가능
export default IdolModel;
