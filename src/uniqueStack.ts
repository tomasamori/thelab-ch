import Stack from './stack';
import { AllowedTypes } from './allowedTypes';

class UniqueStack<T extends AllowedTypes> extends Stack<T> {

    push(item: T): void {
        if (!this.items.includes(item)) {
            super.push(item);
        } else {
            console.log('El elemento ya se encuentra en la pila');
        }
    }

}