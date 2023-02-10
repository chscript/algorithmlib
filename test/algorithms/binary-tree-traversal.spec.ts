import {
    BinarySearchTree,
    preOrderTraversal,
    inOrderTraversal,
    postOrderTraversal,
    levelOrderTraversal
} from '../../index'
import { describe, expect, test } from 'vitest'

describe('Binary Traversal', () => {
    const object: BinarySearchTree<string> = new BinarySearchTree()
    object
        .insert(4, 'A')
        .insert(2, 'B')
        .insert(6, 'C')
        .insert(1, 'D')
        .insert(3, 'E')
        .insert(5, 'F')
        .insert(7, 'G')
    describe('preOrderTraversal', () => {
        test('main', () => {
            expect(preOrderTraversal(object)).toEqual([
                { index: 4, element: 'A' },
                { index: 2, element: 'B' },
                { index: 1, element: 'D' },
                { index: 3, element: 'E' },
                { index: 6, element: 'C' },
                { index: 5, element: 'F' },
                { index: 7, element: 'G' }
            ])
        })
    })
    describe('inOrderTraversal', () => {
        test('main', () => {
            expect(inOrderTraversal(object)).toEqual([
                { index: 1, element: 'D' },
                { index: 2, element: 'B' },
                { index: 3, element: 'E' },
                { index: 4, element: 'A' },
                { index: 5, element: 'F' },
                { index: 6, element: 'C' },
                { index: 7, element: 'G' }
            ])
        })
    })
    describe('postOrderTraversal', () => {
        test('main', () => {
            expect(postOrderTraversal(object)).toEqual([
                { index: 1, element: 'D' },
                { index: 3, element: 'E' },
                { index: 2, element: 'B' },
                { index: 5, element: 'F' },
                { index: 7, element: 'G' },
                { index: 6, element: 'C' },
                { index: 4, element: 'A' }
            ])
        })
    })
    describe('levelOrderTraversal', () => {
        test('main', () => {
            expect(levelOrderTraversal(object)).toEqual([
                [{ index: 4, element: 'A' }],
                [
                    { index: 2, element: 'B' },
                    { index: 6, element: 'C' }
                ],
                [
                    { index: 1, element: 'D' },
                    { index: 3, element: 'E' },
                    { index: 5, element: 'F' },
                    { index: 7, element: 'G' }
                ]
            ])
        })
    })
})
