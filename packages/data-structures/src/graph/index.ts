export class Graph<K> {
    length: number
    vertices: Map<K, Map<K, number | null>>
    isDirected: boolean
    constructor(isDirected = false) {
        this.length = 0
        this.vertices = new Map()
        this.isDirected = isDirected
    }
    addVertex(...vertices: K[]): Graph<K> {
        vertices.forEach((key: K) => {
            this.vertices.set(key, new Map())
            this.length++
        })
        return this
    }
    addEdge(v: K, edges: Array<[K, number | null]>): Graph<K> {
        if (!this.vertices.get(v)) {
            this.addVertex(v)
        }
        for (const key of edges) {
            if (!this.vertices.get(key[0])) {
                this.addVertex(key[0])
            }
            this.vertices.get(v)!.set(key[0], key[1])
            if (!this.isDirected) {
                this.vertices.get(key[0])!.set(v, key[1])
            }
        }
        return this
    }
    removeVertex(v: K): Graph<K> {
        this.vertices.delete(v)
        for (const key of this.vertices.keys()) {
            this.vertices.get(key)!.delete(v)
        }
        this.length--
        return this
    }
    removeEdge(v: K, w: K): Graph<K> {
        this.vertices.get(v)!.delete(w)
        if (!this.isDirected) {
            this.vertices.get(w)!.delete(v)
        }
        return this
    }
    isEmpty(): boolean {
        return this.length === 0
    }
}
