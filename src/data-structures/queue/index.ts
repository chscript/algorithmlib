export class Queue<T> {
    length: number
    queue: T[]
    constructor() {
        this.length = 0
        this.queue = []
    }
    dequeue(): T | undefined {
        if (this.isEmpty()) {
            return undefined
        } else {
            this.length--
            return this.queue.shift()
        }
    }
    enqueue(element: T): Queue<T> {
        this.queue.push(element) && this.length++
        return this
    }
    isEmpty(): boolean {
        return this.length === 0
    }
}
