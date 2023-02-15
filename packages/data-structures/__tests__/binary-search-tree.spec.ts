import { BinarySearchTree } from '../index'
import { describe, expect, test } from 'vitest'

describe('BinarySearchTree', () => {
    describe('Method', () => {
        const object: BinarySearchTree<string> = new BinarySearchTree()
        describe('insert', () => {
            test('main', () => {
                object.insert(6, 'A').insert(4, 'B').insert(8, 'C')
                expect(object.root).toEqual({
                    index: 6,
                    element: 'A',
                    left: { index: 4, element: 'B', left: null, right: null },
                    right: { index: 8, element: 'C', left: null, right: null }
                })
            })
        })
        describe('search', () => {
            test('main', () => {
                expect(object.search(6)).toEqual(true)
                expect(object.search(4)).toEqual(true)
                expect(object.search(8)).toEqual(true)
                expect(object.search(0)).toEqual(false)
                expect(object.search(1)).toEqual(false)
            })
        })
        describe('remove', () => {
            test('left subtree and right subtree', () => {
                object.remove(6)
                expect(object.root).toEqual({
                    index: 8,
                    element: 'C',
                    left: { index: 4, element: 'B', left: null, right: null },
                    right: null
                })
            })
            test('left subtree or right subtree', () => {
                object.remove(8)
                expect(object.root).toEqual({
                    index: 4,
                    element: 'B',
                    left: null,
                    right: null
                })
            })
            test('leaf node', () => {
                object.remove(4)
                expect(object.root).toEqual(null)
            })
        })
    })
})
