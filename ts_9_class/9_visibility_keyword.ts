/**
 * Visibility Keyword
 * 1) public - 어디서든 접근가능
 * 2) protected - 현재 클래스, 및 하위 (자식) 클래스에서 접근 가능
 * 3) private - 현재 클래스 내에서만 접근 가능
 */

class PropertyTestParent {
    public publicProperty: string = 'public';
    protected protectedProperty: string = 'protected';
    private privateProperty: string = 'private';
    #jsPrivateProperty: string = 'jsPrivateProperty'; // private property in JavaScript

    test() {
        this.publicProperty;
        this.protectedProperty;
        this.privateProperty;
        this.#jsPrivateProperty;
    }
}
class PropertyTestChild extends PropertyTestParent {
    test() {
        this.publicProperty;
        this.protectedProperty;
        // this.privateProperty; // Error: Property 'privateProperty' is private and only accessible within class 'PropertyTestParent'.
        // this.#jsPrivateProperty; // Error: Private field '#jsPrivateProperty' must be declared in an enclosing class
    }
}

const instance = new PropertyTestChild();
instance.publicProperty; // OK
// instance.protectedProperty; // Error: Property 'protectedProperty' is protected and only accessible within class 'PropertyTestParent' and its subclasses.
// instance.privateProperty; // Error: Property 'privateProperty' is private and only accessible within class 'PropertyTestParent'.
// instance.#jsPrivateProperty; // Error: Private field '#jsPrivateProperty' must be declared in an enclosing class
