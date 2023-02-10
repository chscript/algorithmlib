import { Stack } from '../stack'
import { Queue } from '../queue'
import { BinarySearchTree } from './index'
import { BinarySearchTreeNode } from './index'

export const preOrderTraversal = <T>(
    tree: BinarySearchTree<T>
): Array<{ index: number; element: T }> => {
    const result: Array<{ index: number; element: T }> = []
    const stack: Stack<BinarySearchTreeNode<T> | null | undefined> = new Stack()
    let node: BinarySearchTreeNode<T> | null | undefined = tree.root
    while (node !== null || !stack.isEmpty()) {
        while (node !== null) {
            stack.push(node)
            result.push({ index: node!.index, element: node!.element })
            node = node!.left
        }
        node = stack.pop()
        node = node!.right
    }
    return result
}
export const inOrderTraversal = <T>(
    tree: BinarySearchTree<T>
): Array<{ index: number; element: T }> => {
    const result: Array<{ index: number; element: T }> = []
    const stack: Stack<BinarySearchTreeNode<T> | null | undefined> = new Stack()
    let node: BinarySearchTreeNode<T> | null | undefined = tree.root
    while (node !== null || !stack.isEmpty()) {
        while (node !== null) {
            stack.push(node)
            node = node!.left
        }
        node = stack.pop()
        result.push({ index: node!.index, element: node!.element })
        node = node!.right
    }
    return result
}
export const postOrderTraversal = <T>(
    tree: BinarySearchTree<T>
): Array<{ index: number; element: T }> => {
    const result: Array<{ index: number; element: T }> = []
    const stack: Stack<BinarySearchTreeNode<T> | null | undefined> = new Stack()
    let node: BinarySearchTreeNode<T> | null | undefined = tree.root
    let prev: BinarySearchTreeNode<T> | null | undefined = null
    while (node !== null || !stack.isEmpty()) {
        while (node !== null) {
            stack.push(node)
            node = node!.left
        }
        node = stack.pop()
        if (node!.right === null || node!.right === prev) {
            result.push({ index: node!.index, element: node!.element })
            prev = node
            node = null
        } else {
            stack.push(node)
            node = node!.right
        }
    }
    return result
}
export const levelOrderTraversal = <T>(
    tree: BinarySearchTree<T>
): Array<Array<{ index: number; element: T }>> => {
    const result: Array<Array<{ index: number; element: T }>> = []
    if (!tree.root) {
        return result
    }
    const queue: Queue<BinarySearchTreeNode<T> | null | undefined> = new Queue()
    let node: BinarySearchTreeNode<T> | null | undefined = tree.root
    queue.enqueue(node)
    while (!queue.isEmpty()) {
        result.push([])
        const { length } = queue
        for (let i = 0; i < length; i++) {
            node = queue.dequeue()
            result[result.length - 1].push({
                index: node!.index,
                element: node!.element
            })
            if (node!.left) {
                queue.enqueue(node!.left)
            }
            if (node!.right) {
                queue.enqueue(node!.right)
            }
        }
    }
    return result
}

// export const preOrderTraversal = <T>(tree: BinarySearchTree<T>)
//     : Array<{ index: number; element: T }> => {
//     let result: Array<{ index: number, element: T }> = []
//     preOrderTraversalNode(tree.root, result)
//     return result
// }
// const preOrderTraversalNode = <T>(
//     node: BinarySearchTreeNode<T> | null,
//     result: Array<{ index: number, element: T }>): void => {
//     if (node !== null) {
//         result.push({ index: node!.index, element: node!.element })
//         preOrderTraversalNode(node!.left, result)
//         preOrderTraversalNode(node!.right, result)
//     }
// }

// export const inOrderTraversal = <T>(tree: BinarySearchTree<T>)
//     : Array<{ index: number; element: T }> => {
//     let result: Array<{ index: number, element: T }> = []
//     inOrderTraversalNode(tree.root, result)
//     return result
// }
// const inOrderTraversalNode = <T>(
//     node: BinarySearchTreeNode<T> | null,
//     result: Array<{ index: number, element: T }>): void => {
//     if (node !== null) {
//         inOrderTraversalNode(node!.left, result)
//         result.push({ index: node!.index, element: node!.element })
//         inOrderTraversalNode(node!.right, result)
//     }
// }

// export const postOrderTraversal = <T>(tree: BinarySearchTree<T>)
//     : Array<{ index: number; element: T }> => {
//     let result: Array<{ index: number, element: T }> = []
//     postOrderTraversalNode(tree.root, result)
//     return result
// }
// const postOrderTraversalNode = <T>(
//     node: BinarySearchTreeNode<T> | null,
//     result: Array<{ index: number, element: T }>): void => {
//     if (node !== null) {
//         postOrderTraversalNode(node!.left, result)
//         postOrderTraversalNode(node!.right, result)
//         result.push({ index: node!.index, element: node!.element })
//     }
// }

// export const levelOrderTraversal = <T>(tree: BinarySearchTree<T>)
//     : Array<Array<{ index: number; element: T }>> => {
//     let result: Array<Array<{ index: number, element: T }>> = []
//     levelOrderTraversalNode(tree.root, result, 0)
//     return result
// }
// const levelOrderTraversalNode = <T>(
//     node: BinarySearchTreeNode<T> | null,
//     result: Array<Array<{ index: number, element: T }>>, level: number): void => {
//     if (!result[level]) { result[level] = [] }
//     result[level].push({ index: node!.index, element: node!.element })
//     if (node!.left) { levelOrderTraversalNode(node!.left, result, level + 1) }
//     if (node!.right) { levelOrderTraversalNode(node!.right, result, level + 1) }
// }
