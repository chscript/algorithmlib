import { Graph } from './index'
import { Queue } from '../queue'
import { Stack } from '../stack'

const initColor = <K>(
    vertices: Map<K, Map<K, number | null>>
): Map<K, 'white' | 'gray' | 'black'> => {
    const color = new Map()
    for (const key of vertices.keys()) {
        color.set(key, 'white')
    }
    return color
}
export const breadthFirstSearch = <K>(
    graph: Graph<K>,
    startVertex: K
): Array<K> => {
    const result: Array<K> = []
    const color = initColor(graph.vertices)
    const queue: Queue<K | undefined> = new Queue()
    queue.enqueue(startVertex)
    while (!queue.isEmpty()) {
        const v: K | undefined = queue.dequeue()
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

export const depthFirstSearch = <K>(
    graph: Graph<K>,
    startVertex: K
): Array<K> => {
    const result: Array<K> = []
    const color = initColor(graph.vertices)
    const stack: Stack<K | undefined> = new Stack()
    stack.push(startVertex)
    while (!stack.isEmpty()) {
        const v: K | undefined = stack.pop()
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
