declare class Stack<T> {
    length: number
    stack: T[]
    constructor()
    pop(): T | undefined
    push(element: T): Stack<T>
    isEmpty(): boolean
}

declare class Queue<T> {
    length: number
    queue: T[]
    constructor()
    dequeue(): T | undefined
    enqueue(element: T): Queue<T>
    isEmpty(): boolean
}

declare class LinkedListNode<T> {
    element: T
    next: LinkedListNode<T> | null
    constructor(element: T)
}
declare class LinkedList<T> {
    length: number
    head: LinkedListNode<T> | null
    constructor()
    private getLinkedListNode
    indexOf(element: T): number
    insert(element: T, index?: number): LinkedList<T>
    remove(index: number): boolean
    isEmpty(): boolean
}

declare function HashCode(str: string | number): number
declare class keyValuePair<K extends number | string, V> {
    key: K
    value: V
    constructor(key: K, value: V)
}
declare class HashTable<K extends number | string, V> {
    length: number
    table: {
        [index: number]: LinkedList<keyValuePair<K, V>>
    }
    constructor()
    get(key: K): V | undefined
    set(key: K, value: V): HashTable<K, V>
    remove(key: K): boolean
    isEmpty(): boolean
}

declare class BinarySearchTreeNode<T> {
    index: number
    element: T
    left: BinarySearchTreeNode<T> | null
    right: BinarySearchTreeNode<T> | null
    constructor(index: number, element: T)
}
declare class BinarySearchTree<T> {
    length: number
    root: BinarySearchTreeNode<T> | null
    constructor()
    min(): BinarySearchTreeNode<T> | null
    max(): BinarySearchTreeNode<T> | null
    minNode(
        node: BinarySearchTreeNode<T> | null
    ): BinarySearchTreeNode<T> | null
    maxNode(
        node: BinarySearchTreeNode<T> | null
    ): BinarySearchTreeNode<T> | null
    insert(index: number, element: T): BinarySearchTree<T>
    search(index: number): boolean
    private removeNode
    remove(index: number): boolean
    isEmpty(): boolean
}

declare const preOrderTraversal: <T>(tree: BinarySearchTree<T>) => {
    index: number
    element: T
}[]
declare const inOrderTraversal: <T>(tree: BinarySearchTree<T>) => {
    index: number
    element: T
}[]
declare const postOrderTraversal: <T>(tree: BinarySearchTree<T>) => {
    index: number
    element: T
}[]
declare const levelOrderTraversal: <T>(tree: BinarySearchTree<T>) => {
    index: number
    element: T
}[][]

declare class Graph<K> {
    length: number
    vertices: Map<K, Map<K, number | null>>
    isDirected: boolean
    constructor(isDirected?: boolean)
    addVertex(...vertices: K[]): Graph<K>
    addEdge(v: K, edges: Array<[K, number | null]>): Graph<K>
    removeVertex(v: K): Graph<K>
    removeEdge(v: K, w: K): Graph<K>
    isEmpty(): boolean
}

declare const breadthFirstSearch: <K>(graph: Graph<K>, startVertex: K) => K[]
declare const depthFirstSearch: <K>(graph: Graph<K>, startVertex: K) => K[]

type sortedCallbackFuction<T> = (a: T, b: T) => number

declare function bubbleSort<T>(
    array: T[],
    compare?: sortedCallbackFuction<T>
): T[]

declare function insertSort<T>(
    array: T[],
    compare?: sortedCallbackFuction<T>
): T[]

declare function quickSort<T>(
    array: T[],
    compare?: sortedCallbackFuction<T>
): T[]

declare function mergeSort<T>(
    array: T[],
    compare?: sortedCallbackFuction<T>
): T[]

declare function binarySearch<T>(
    array: T[],
    target:
        | number
        | {
              [key: string]: number
          }
): number | boolean

export {
    BinarySearchTree,
    BinarySearchTreeNode,
    Graph,
    HashCode,
    HashTable,
    LinkedList,
    LinkedListNode,
    Queue,
    Stack,
    binarySearch,
    breadthFirstSearch,
    bubbleSort,
    depthFirstSearch,
    inOrderTraversal,
    insertSort,
    keyValuePair,
    levelOrderTraversal,
    mergeSort,
    postOrderTraversal,
    preOrderTraversal,
    quickSort
}
