import { LinkedList } from '../../index'
import { describe, expect, test } from 'vitest'

describe('LinkedList', () => {
    describe('Method', () => {
        describe('insert', () => {
            const object: LinkedList<string> = new LinkedList()
            test('tail node', () => {
                object.insert('A').insert('B')
                expect(object.head).toEqual({
                    element: 'A',
                    next: {
                        element: 'B',
                        next: null
                    }
                })
            })
            test('middle node', () => {
                object.insert('E', 1)
                expect(object.head).toEqual({
                    element: 'A',
                    next: {
                        element: 'E',
                        next: {
                            element: 'B',
                            next: null
                        }
                    }
                })
            })
            test('head node', () => {
                object.insert('D', 0)
                expect(object.head).toEqual({
                    element: 'D',
                    next: {
                        element: 'A',
                        next: {
                            element: 'E',
                            next: {
                                element: 'B',
                                next: null
                            }
                        }
                    }
                })
            })
        })
        describe('remove', () => {
            const object: LinkedList<string> = new LinkedList()
            object.insert('A').insert('B').insert('C').insert('D')
            test('tail node', () => {
                object.remove(3)
                expect(object.head).toEqual({
                    element: 'A',
                    next: {
                        element: 'B',
                        next: {
                            element: 'C',
                            next: null
                        }
                    }
                })
            })
            test('middle node', () => {
                object.remove(1)
                expect(object.head).toEqual({
                    element: 'A',
                    next: {
                        element: 'C',
                        next: null
                    }
                })
            })
            test('head node', () => {
                object.remove(0)
                expect(object.head).toEqual({
                    element: 'C',
                    next: null
                })
                object.remove(0)
                expect(object.head).toEqual(null)
            })
        })
        describe('indexOf', () => {
            const object: LinkedList<string> = new LinkedList()
            object.insert('A').insert('B').insert('C')
            test('main', () => {
                expect(object.indexOf('A')).toEqual(0)
                expect(object.indexOf('B')).toEqual(1)
                expect(object.indexOf('C')).toEqual(2)
            })
        })
    })
})
