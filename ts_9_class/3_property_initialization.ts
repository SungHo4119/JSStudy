/**
 * Property Initialization
 */

class Person {
    name: string;
    age: number = 23;
    pet?: string;

    patAge: number | undefined;

    constructor(params: { name: string; pet?: string }) {
        this.name = params.name;
        this.pet = params.pet;
    }
}

class RouteStack {
    stack!: string[];

    constructor() {
        this.initialize();
    }

    initialize() {
        this.stack = [];
    }
}

const routeStack = new RouteStack();
console.log(routeStack.stack); // []
