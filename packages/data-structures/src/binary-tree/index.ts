export class BinarySearchTreeNode<T> {
    index: number
    element: T
    left: BinarySearchTreeNode<T> | null
    right: BinarySearchTreeNode<T> | null
    constructor(index: number, element: T) {
        this.index = index
        this.element = element
        this.left = null
        this.right = null
    }
}

export class BinarySearchTree<T> {
    length: number
    root: BinarySearchTreeNode<T> | null
    constructor() {
        this.length = 0
        this.root = null
    }
    min(): BinarySearchTreeNode<T> | null {
        return this.minNode(this.root)
    }
    max(): BinarySearchTreeNode<T> | null {
        return this.maxNode(this.root)
    }
    minNode(
        node: BinarySearchTreeNode<T> | null
    ): BinarySearchTreeNode<T> | null {
        while (node!.left !== null) {
            node = node!.left
        }
        return node
    }
    maxNode(
        node: BinarySearchTreeNode<T> | null
    ): BinarySearchTreeNode<T> | null {
        while (node!.right !== null) {
            node = node!.right
        }
        return node
    }
    insert(index: number, element: T): BinarySearchTree<T> {
        if (this.isEmpty()) {
            this.root = new BinarySearchTreeNode(index, element)
        } else {
            let node = this.root
            for (let i = 0; i < this.length; i++) {
                if (index < node!.index) {
                    if (node!.left === null) {
                        node!.left = new BinarySearchTreeNode(index, element)
                        break
                    }
                    node = node!.left
                } else if (index > node!.index) {
                    if (node!.right === null) {
                        node!.right = new BinarySearchTreeNode(index, element)
                        break
                    }
                    node = node!.right
                }
            }
        }
        this.length++
        return this
    }
    search(index: number): boolean {
        let node = this.root
        while (node !== null) {
            if (index === node!.index) {
                break
            }
            node =
                index < node!.index
                    ? node!.left
                    : index > node!.index
                    ? node!.right
                    : null
        }
        return !node ? false : true
    }
    private removeNode(
        node: BinarySearchTreeNode<T> | null
    ): BinarySearchTreeNode<T> | null {
        if (node!.right === null && node!.left === null) {
            node = null
        } else if (node!.right === null) {
            node = node!.left
        } else if (node!.left === null) {
            node = node!.right
        } else if (node!.right !== null && node!.left !== null) {
            const temp = this.minNode(node!.right)
            this.remove(temp!.index)
            ;[node!.index, node!.element] = [temp!.index, temp!.element]
            this.length++
        }
        return node
    }
    remove(index: number): boolean {
        if (!this.isEmpty()) {
            let node = this.root
            while (node !== null) {
                if (index === node!.index) {
                    this.root = this.removeNode(node)
                    break
                } else if (node!.left !== null && index === node!.left.index) {
                    node!.left = this.removeNode(node!.left)
                    break
                } else if (
                    node!.right !== null &&
                    index === node!.right.index
                ) {
                    node!.right = this.removeNode(node!.right)
                    break
                } else if (index < node!.index) {
                    node = node!.left
                } else if (index > node!.index) {
                    node = node!.right
                }
            }
            if (!node) {
                return false
            }
        }
        this.length--
        return true
    }
    isEmpty(): boolean {
        return this.length === 0
    }
}
