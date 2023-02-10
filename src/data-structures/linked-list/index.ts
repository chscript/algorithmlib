export class LinkedListNode<T> {
    element: T
    next: LinkedListNode<T> | null
    constructor(element: T) {
        this.element = element
        this.next = null
    }
}

export class LinkedList<T> {
    length: number
    head: LinkedListNode<T> | null
    constructor() {
        this.length = 0
        this.head = null
    }
    private getLinkedListNode(
        index: number
    ): { [index: number]: LinkedListNode<T> | null } | undefined {
        if (!this.isEmpty() && index >= 0 && index < this.length) {
            let current = this.head
            let previous: LinkedListNode<T> | null = null
            for (let i = 0; i < index; i++) {
                previous = current
                current = current!.next
            }
            return { 0: previous, 1: current, 2: current!.next }
        }
    }
    indexOf(element: T): number {
        let current = this.head
        for (let i = 0; i < this.length; i++) {
            if (element === current!.element) {
                return i
            }
            current = current!.next
        }
        return -1
    }
    insert(element: T, index?: number): LinkedList<T> {
        const node = new LinkedListNode(element)
        if (this.isEmpty()) {
            this.head = node
        } else if (index !== undefined) {
            if (index === 0) {
                node.next = this.head
                this.head = node
            } else if (index > 0 && index < this.length) {
                const current = this.getLinkedListNode(index)
                node.next = current![0]!.next
                current![0]!.next = node
            }
        } else if (index === undefined) {
            let current = this.head
            while (current!.next !== null) {
                current = current!.next
            }
            current!.next = node
        }
        this.length++
        return this
    }
    remove(index: number): boolean {
        if (!this.isEmpty() && index >= 0 && index < this.length) {
            if (index === 0) {
                this.head = this.length === 1 ? null : this.head!.next
            } else if (index > 0 && index < this.length) {
                const current = this.getLinkedListNode(index)
                current![0]!.next =
                    index + 1 === this.length ? null : current![2]
            }
            this.length--
            return true
        }
        return false
    }
    isEmpty(): boolean {
        return this.length === 0
    }
}
