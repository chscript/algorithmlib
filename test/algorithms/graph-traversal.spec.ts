import { Graph, breadthFirstSearch, depthFirstSearch } from '../../index'
import { describe, expect, test } from 'vitest'

describe('Graph Traversal', () => {
    const object: Graph<string> = new Graph()
    object.addEdge('A', [
        ['B', undefined],
        ['C', undefined],
        ['D', undefined]
    ])
    object.addEdge('B', [['E', undefined]])
    object.addEdge('C', [['F', undefined]])
    object.addEdge('F', [['H', undefined]])
    object.addEdge('H', [['G', undefined]])
    object.addEdge('G', [['D', undefined]])
    describe('breadthFirstSearch', () => {
        test('main', () => {
            expect(breadthFirstSearch(object, 'A')).toEqual([
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'G',
                'H'
            ])
        })
    })
    describe('depthFirstSearch', () => {
        test('main', () => {
            expect(depthFirstSearch(object, 'A')).toEqual([
                'A',
                'D',
                'G',
                'H',
                'F',
                'C',
                'B',
                'E'
            ])
        })
    })
})
