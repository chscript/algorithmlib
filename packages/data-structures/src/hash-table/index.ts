import { LinkedList } from '../linked-list'

function HashFunc(str: string) {
    let address = 0
    const primeNum = 5381
    const magicNum = 33
    for (let i = 0; i < str.length; i++) {
        address += primeNum * magicNum + str.charCodeAt(i)
    }
    return address % 1013
}

export function HashCode(str: string | number): number {
    return typeof str === 'string'
        ? HashFunc(str)
        : typeof str === 'number'
        ? str
        : 0
}

export class keyValuePair<K extends number | string, V> {
    key: K
    value: V
    constructor(key: K, value: V) {
        this.key = key
        this.value = value
    }
}

export class HashTable<K extends number | string, V> {
    length: number
    table: { [index: number]: LinkedList<keyValuePair<K, V>> }
    constructor() {
        this.length = 0
        this.table = {}
    }
    get(key: K): V | undefined {
        if (this.table[HashCode(key)] !== undefined) {
            let current = this.table[HashCode(key)].head
            while (current !== null) {
                if (key === current!.element!.key) {
                    return current!.element!.value
                }
                current = current!.next
            }
        }
        return undefined
    }
    set(key: K, value: V): HashTable<K, V> {
        if (this.table[HashCode(key)] === undefined) {
            this.table[HashCode(key)] = new LinkedList()
        }
        this.table[HashCode(key)].insert(new keyValuePair(key, value))
        this.length++
        return this
    }
    remove(key: K): boolean {
        if (this.table[HashCode(key)] !== undefined) {
            if (this.table[HashCode(key)].length === 1) {
                delete this.table[HashCode(key)]
            } else if (this.table[HashCode(key)].length > 1) {
                let current = this.table[HashCode(key)].head
                for (let i = 0; i < this.table[HashCode(key)].length; i++) {
                    if (key === current!.element!.key) {
                        this.table[HashCode(key)].remove(i)
                        break
                    }
                    current = current!.next
                }
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
