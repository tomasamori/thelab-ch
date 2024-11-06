import { AllowedTypes } from './allowedTypes';

class Stack<T extends AllowedTypes> {

    protected items: T[] = [];

    push(item: T): void {
        this.items.push(item);
        console.log(this.items);
    }

    pop(): void {
        this.items.pop();
        console.log(this.items);
    }

    size(): void {
        console.log("Elementos contenidos en la pila:", this.items.length);
    }

}

export default Stack;