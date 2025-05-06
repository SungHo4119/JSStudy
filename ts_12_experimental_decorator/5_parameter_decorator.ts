/**
 * Parameter Decorator
 */
class Cat {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    dance(@LogParam adj: string) {
        console.log(`The cat ${this.name} is dancing ${adj}`);
    }
}

const cat = new Cat('Tom');
cat.dance('gracefully');

function LogParam(target: any, propertyKey: string, parameterIndex: number) {
    console.log(`Parameter decorator called for ${propertyKey} at index ${parameterIndex}`);
}
