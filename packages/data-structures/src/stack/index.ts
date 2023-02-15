export class Stack<T> {
    length: number
    stack: T[]
    constructor() {
        this.length = 0
        this.stack = []
    }
    pop(): T | undefined {
        if (this.isEmpty()) {
            return undefined
        } else {
            this.length--
            return this.stack.pop()
        }
    }
    push(element: T): Stack<T> {
        this.stack.push(element) && this.length++
        return this
    }
    isEmpty(): boolean {
        return this.length === 0
    }
}
