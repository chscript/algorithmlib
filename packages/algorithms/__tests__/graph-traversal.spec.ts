import { breadthFirstSearch, depthFirstSearch } from '../index'
import { Graph } from '@algorithmlib/data-structures'
import { describe, expect, test } from 'vitest'

describe('Graph Traversal', () => {
    const object: Graph<string> = new Graph()
    object.addEdge('A', [
        ['B', null],
        ['C', null],
        ['D', null]
    ])
    object.addEdge('B', [['E', null]])
    object.addEdge('C', [['F', null]])
    object.addEdge('F', [['H', null]])
    object.addEdge('H', [['G', null]])
    object.addEdge('G', [['D', null]])
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
