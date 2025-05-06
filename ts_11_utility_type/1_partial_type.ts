/**
 * Partial Type
 */
interface Idol {
    name: string;
    age: number;
    group: string;
}

const yuJin: Idol = {
    name: 'YuJin',
    age: 20,
    group: 'IVE',
};

// updates는 Idol을 덮어 씌우고싶은데 부분적으로 사용하고싶을때.. Partial
function updateIdol(orignial: Idol, updates: Partial<Idol>) {
    return {
        ...orignial,
        ...updates,
    };
}
// Object literal may only specify known properties, and 'ttt' does not exist in type 'Partial<Idol>'
// console.log(updateIdol(yuJin, { ttt: 123 }));
