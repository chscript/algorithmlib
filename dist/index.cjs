'use strict'

class Stack {
    length
    stack
    constructor() {
        this.length = 0
        this.stack = []
    }
    pop() {
        if (this.isEmpty()) {
            return undefined
        } else {
            this.length--
            return this.stack.pop()
        }
    }
    push(element) {
        this.stack.push(element) && this.length++
        return this
    }
    isEmpty() {
        return this.length === 0
    }
}

class Queue {
    length
    queue
    constructor() {
        this.length = 0
        this.queue = []
    }
    dequeue() {
        if (this.isEmpty()) {
            return undefined
        } else {
            this.length--
            return this.queue.shift()
        }
    }
    enqueue(element) {
        this.queue.push(element) && this.length++
        return this
    }
    isEmpty() {
        return this.length === 0
    }
}

class LinkedListNode {
    element
    next
    constructor(element) {
        this.element = element
        this.next = null
    }
}
class LinkedList {
    length
    head
    constructor() {
        this.length = 0
        this.head = null
    }
    getLinkedListNode(index) {
        if (!this.isEmpty() && index >= 0 && index < this.length) {
            let current = this.head
            let previous = null
            for (let i = 0; i < index; i++) {
                previous = current
                current = current.next
            }
            return { 0: previous, 1: current, 2: current.next }
        }
    }
    indexOf(element) {
        let current = this.head
        for (let i = 0; i < this.length; i++) {
            if (element === current.element) {
                return i
            }
            current = current.next
        }
        return -1
    }
    insert(element, index) {
        const node = new LinkedListNode(element)
        if (this.isEmpty()) {
            this.head = node
        } else if (index !== undefined) {
            if (index === 0) {
                node.next = this.head
                this.head = node
            } else if (index > 0 && index < this.length) {
                const current = this.getLinkedListNode(index)
                node.next = current[0].next
                current[0].next = node
            }
        } else if (index === undefined) {
            let current = this.head
            while (current.next !== null) {
                current = current.next
            }
            current.next = node
        }
        this.length++
        return this
    }
    remove(index) {
        if (!this.isEmpty() && index >= 0 && index < this.length) {
            if (index === 0) {
                this.head = this.length === 1 ? null : this.head.next
            } else if (index > 0 && index < this.length) {
                const current = this.getLinkedListNode(index)
                current[0].next = index + 1 === this.length ? null : current[2]
            }
            this.length--
            return true
        }
        return false
    }
    isEmpty() {
        return this.length === 0
    }
}

function HashFunc(str) {
    let address = 0
    const primeNum = 5381
    const magicNum = 33
    for (let i = 0; i < str.length; i++) {
        address += primeNum * magicNum + str.charCodeAt(i)
    }
    return address % 1013
}
function HashCode(str) {
    return typeof str === 'string'
        ? HashFunc(str)
        : typeof str === 'number'
        ? str
        : 0
}
class keyValuePair {
    key
    value
    constructor(key, value) {
        this.key = key
        this.value = value
    }
}
class HashTable {
    length
    table
    constructor() {
        this.length = 0
        this.table = {}
    }
    get(key) {
        if (this.table[HashCode(key)] !== undefined) {
            let current = this.table[HashCode(key)].head
            while (current !== null) {
                if (key === current.element.key) {
                    return current.element.value
                }
                current = current.next
            }
        }
        return undefined
    }
    set(key, value) {
        if (this.table[HashCode(key)] === undefined) {
            this.table[HashCode(key)] = new LinkedList()
        }
        this.table[HashCode(key)].insert(new keyValuePair(key, value))
        this.length++
        return this
    }
    remove(key) {
        if (this.table[HashCode(key)] !== undefined) {
            if (this.table[HashCode(key)].length === 1) {
                delete this.table[HashCode(key)]
            } else if (this.table[HashCode(key)].length > 1) {
                let current = this.table[HashCode(key)].head
                for (let i = 0; i < this.table[HashCode(key)].length; i++) {
                    if (key === current.element.key) {
                        this.table[HashCode(key)].remove(i)
                        break
                    }
                    current = current.next
                }
            }
            this.length--
            return true
        }
        return false
    }
    isEmpty() {
        return this.length === 0
    }
}

class BinarySearchTreeNode {
    index
    element
    left
    right
    constructor(index, element) {
        this.index = index
        this.element = element
        this.left = null
        this.right = null
    }
}
class BinarySearchTree {
    length
    root
    constructor() {
        this.length = 0
        this.root = null
    }
    min() {
        return this.minNode(this.root)
    }
    max() {
        return this.maxNode(this.root)
    }
    minNode(node) {
        while (node.left !== null) {
            node = node.left
        }
        return node
    }
    maxNode(node) {
        while (node.right !== null) {
            node = node.right
        }
        return node
    }
    insert(index, element) {
        if (this.isEmpty()) {
            this.root = new BinarySearchTreeNode(index, element)
        } else {
            let node = this.root
            for (let i = 0; i < this.length; i++) {
                if (index < node.index) {
                    if (node.left === null) {
                        node.left = new BinarySearchTreeNode(index, element)
                        break
                    }
                    node = node.left
                } else if (index > node.index) {
                    if (node.right === null) {
                        node.right = new BinarySearchTreeNode(index, element)
                        break
                    }
                    node = node.right
                }
            }
        }
        this.length++
        return this
    }
    search(index) {
        let node = this.root
        while (node !== null) {
            if (index === node.index) {
                break
            }
            node =
                index < node.index
                    ? node.left
                    : index > node.index
                    ? node.right
                    : null
        }
        return !node ? false : true
    }
    removeNode(node) {
        if (node.right === null && node.left === null) {
            node = null
        } else if (node.right === null) {
            node = node.left
        } else if (node.left === null) {
            node = node.right
        } else if (node.right !== null && node.left !== null) {
            const temp = this.minNode(node.right)
            this.remove(temp.index)
            ;[node.index, node.element] = [temp.index, temp.element]
            this.length++
        }
        return node
    }
    remove(index) {
        if (!this.isEmpty()) {
            let node = this.root
            while (node !== null) {
                if (index === node.index) {
                    this.root = this.removeNode(node)
                    break
                } else if (node.left !== null && index === node.left.index) {
                    node.left = this.removeNode(node.left)
                    break
                } else if (node.right !== null && index === node.right.index) {
                    node.right = this.removeNode(node.right)
                    break
                } else if (index < node.index) {
                    node = node.left
                } else if (index > node.index) {
                    node = node.right
                }
            }
            if (!node) {
                return false
            }
        }
        this.length--
        return true
    }
    isEmpty() {
        return this.length === 0
    }
}

class Graph {
    length
    vertices
    isDirected
    constructor(isDirected = false) {
        this.length = 0
        this.vertices = new Map()
        this.isDirected = isDirected
    }
    addVertex(...vertices) {
        vertices.forEach(key => {
            this.vertices.set(key, new Map())
            this.length++
        })
        return this
    }
    addEdge(v, edges) {
        if (!this.vertices.get(v)) {
            this.addVertex(v)
        }
        for (const key of edges) {
            if (!this.vertices.get(key[0])) {
                this.addVertex(key[0])
            }
            this.vertices.get(v).set(key[0], key[1])
            if (!this.isDirected) {
                this.vertices.get(key[0]).set(v, key[1])
            }
        }
        return this
    }
    removeVertex(v) {
        this.vertices.delete(v)
        for (const key of this.vertices.keys()) {
            this.vertices.get(key).delete(v)
        }
        this.length--
        return this
    }
    removeEdge(v, w) {
        this.vertices.get(v).delete(w)
        if (!this.isDirected) {
            this.vertices.get(w).delete(v)
        }
        return this
    }
    isEmpty() {
        return this.length === 0
    }
}

const preOrderTraversal = tree => {
    const result = []
    const stack = new Stack()
    let node = tree.root
    while (node !== null || !stack.isEmpty()) {
        while (node !== null) {
            stack.push(node)
            result.push({ index: node.index, element: node.element })
            node = node.left
        }
        node = stack.pop()
        node = node.right
    }
    return result
}
const inOrderTraversal = tree => {
    const result = []
    const stack = new Stack()
    let node = tree.root
    while (node !== null || !stack.isEmpty()) {
        while (node !== null) {
            stack.push(node)
            node = node.left
        }
        node = stack.pop()
        result.push({ index: node.index, element: node.element })
        node = node.right
    }
    return result
}
const postOrderTraversal = tree => {
    const result = []
    const stack = new Stack()
    let node = tree.root
    let prev = null
    while (node !== null || !stack.isEmpty()) {
        while (node !== null) {
            stack.push(node)
            node = node.left
        }
        node = stack.pop()
        if (node.right === null || node.right === prev) {
            result.push({ index: node.index, element: node.element })
            prev = node
            node = null
        } else {
            stack.push(node)
            node = node.right
        }
    }
    return result
}
const levelOrderTraversal = tree => {
    const result = []
    if (!tree.root) {
        return result
    }
    const queue = new Queue()
    let node = tree.root
    queue.enqueue(node)
    while (!queue.isEmpty()) {
        result.push([])
        const { length } = queue
        for (let i = 0; i < length; i++) {
            node = queue.dequeue()
            result[result.length - 1].push({
                index: node.index,
                element: node.element
            })
            if (node.left) {
                queue.enqueue(node.left)
            }
            if (node.right) {
                queue.enqueue(node.right)
            }
        }
    }
    return result
}

const initColor = vertices => {
    const color = new Map()
    for (const key of vertices.keys()) {
        color.set(key, 'white')
    }
    return color
}
const breadthFirstSearch = (graph, startVertex) => {
    const result = []
    const color = initColor(graph.vertices)
    const queue = new Queue()
    queue.enqueue(startVertex)
    while (!queue.isEmpty()) {
        const v = queue.dequeue()
        if (v !== undefined) {
            const vertices = graph.vertices.get(v)
            if (vertices !== undefined) {
                for (const key of vertices) {
                    if (color.get(key[0]) === 'white') {
                        queue.enqueue(key[0])
                        color.set(key[0], 'gray')
                    }
                }
            }
            color.set(v, 'black')
            result.push(v)
        }
    }
    return result
}
const depthFirstSearch = (graph, startVertex) => {
    const result = []
    const color = initColor(graph.vertices)
    const stack = new Stack()
    stack.push(startVertex)
    while (!stack.isEmpty()) {
        const v = stack.pop()
        if (v !== undefined) {
            const vertices = graph.vertices.get(v)
            if (vertices !== undefined) {
                for (const key of vertices) {
                    if (color.get(key[0]) === 'white') {
                        stack.push(key[0])
                        color.set(key[0], 'gray')
                    }
                }
            }
            color.set(v, 'black')
            result.push(v)
        }
    }
    return result
}

const defaultCompare = (a, b) => {
    return a.toString().charCodeAt(0) - b.toString().charCodeAt(0)
}
const isObject = (obj, key) => {
    return (
        obj !== null && typeof obj === 'object' && typeof obj[key] === 'number'
    )
}

function bubbleSort(array, compare = defaultCompare) {
    let lastSwapLeftIndex = 0
    let lastSwapRightIndex = array.length - 1
    let leftBorder = lastSwapLeftIndex
    let rightBorder = lastSwapRightIndex
    for (let i = 0; i < array.length / 2; i++) {
        let isSorted = true
        for (let j = leftBorder; j < rightBorder; j++) {
            if (compare(array[j + 1], array[j]) < 0) {
                ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
                isSorted = false
                lastSwapRightIndex = j
            }
        }
        if (isSorted) {
            break
        }
        rightBorder = lastSwapRightIndex
        for (let j = rightBorder; j > leftBorder; j--) {
            if (compare(array[j - 1], array[j]) > 0) {
                ;[array[j], array[j - 1]] = [array[j - 1], array[j]]
                isSorted = false
                lastSwapLeftIndex = j
            }
        }
        if (isSorted) {
            break
        }
        leftBorder = lastSwapLeftIndex
    }
    return array
}

function insertSort(array, compare = defaultCompare) {
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j > 0; j--) {
            if (compare(array[j], array[j - 1]) < 0) {
                ;[array[j - 1], array[j]] = [array[j], array[j - 1]]
            } else {
                break
            }
        }
    }
    return array
}

function quickSort(array, compare = defaultCompare) {
    if (array.length < 2) return array
    const left = [],
        right = []
    for (let i = 1; i < array.length; i++) {
        if (compare(array[0], array[i]) <= 0) {
            right.push(array[i])
        } else {
            left.push(array[i])
        }
    }
    return quickSort(left, compare).concat(array[0], quickSort(right, compare))
}

function merge(left, right, compare = defaultCompare) {
    let i = 0,
        j = 0,
        end = []
    const result = []
    while (i < left.length && j < right.length) {
        if (compare(left[i], right[j]) <= 0) {
            result.push(left[i++])
        } else {
            result.push(right[j++])
        }
    }
    if (i < left.length && j === right.length) {
        end = left.slice(i)
    } else if (j < right.length && i === left.length) {
        end = right.slice(j)
    }
    return result.concat(end)
}
function mergeSort(array, compare = defaultCompare) {
    if (array.length > 1) {
        const { length } = array
        const middle = Math.floor(length / 2)
        const left = mergeSort(array.slice(0, middle), compare)
        const right = mergeSort(array.slice(middle, length), compare)
        array = merge(left, right, compare)
    }
    return array
}

function binarySearch(array, target) {
    const key = Object.keys(target)[0]
    const bool = isObject(target, key)
    array = quickSort(array, (a, b) => {
        return bool ? a[key] - b[key] : a - b
    })
    let start = 0,
        end = array.length - 1
    target = bool ? target[key] : target
    while (start <= end) {
        const mid = Math.floor((start + end) / 2)
        const index = bool ? array[mid][key] : array[mid]
        if (target > index) {
            start = mid + 1
        } else if (target < index) {
            end = mid - 1
        } else if (target === index) {
            return mid
        }
    }
    return false
}

exports.BinarySearchTree = BinarySearchTree
exports.BinarySearchTreeNode = BinarySearchTreeNode
exports.Graph = Graph
exports.HashCode = HashCode
exports.HashTable = HashTable
exports.LinkedList = LinkedList
exports.LinkedListNode = LinkedListNode
exports.Queue = Queue
exports.Stack = Stack
exports.binarySearch = binarySearch
exports.breadthFirstSearch = breadthFirstSearch
exports.bubbleSort = bubbleSort
exports.depthFirstSearch = depthFirstSearch
exports.inOrderTraversal = inOrderTraversal
exports.insertSort = insertSort
exports.keyValuePair = keyValuePair
exports.levelOrderTraversal = levelOrderTraversal
exports.mergeSort = mergeSort
exports.postOrderTraversal = postOrderTraversal
exports.preOrderTraversal = preOrderTraversal
exports.quickSort = quickSort
