import { HashCode, HashTable } from '../../index'
import { describe, expect, test } from 'vitest'

describe('HashTable', () => {
    describe('Method', () => {
        const object: HashTable<string, string> = new HashTable()
        describe('set', () => {
            test('main', () => {
                object
                    .set('Mike', '111@gmail.com')
                    .set('John', '456@gmail.com')
                    .set('Noya', '789@gmail.com')
                expect(object.table).toEqual({
                    [HashCode('Mike')]: {
                        head: {
                            element: { key: 'Mike', value: '111@gmail.com' },
                            next: null
                        },
                        length: 1
                    },
                    [HashCode('John')]: {
                        head: {
                            element: { key: 'John', value: '456@gmail.com' },
                            next: null
                        },
                        length: 1
                    },
                    [HashCode('Noya')]: {
                        head: {
                            element: { key: 'Noya', value: '789@gmail.com' },
                            next: null
                        },
                        length: 1
                    }
                })
            })
            test('set with hash collision', () => {
                object.set('Mkie', '222@gmail.com')
                object.set('Meik', '333@gmail.com')
                expect(object.table[HashCode('Mike')]).toEqual({
                    head: {
                        element: { key: 'Mike', value: '111@gmail.com' },
                        next: {
                            element: { key: 'Mkie', value: '222@gmail.com' },
                            next: {
                                element: {
                                    key: 'Meik',
                                    value: '333@gmail.com'
                                },
                                next: null
                            }
                        }
                    },
                    length: 3
                })
            })
        })
        describe('get', () => {
            test('main', () => {
                expect(object.get('Mike')).toEqual('111@gmail.com')
                expect(object.get('John')).toEqual('456@gmail.com')
                expect(object.get('Noya')).toEqual('789@gmail.com')
            })
            test('get with hash collision', () => {
                expect(object.get('Mike')).toEqual('111@gmail.com')
                expect(object.get('Mkie')).toEqual('222@gmail.com')
                expect(object.get('Meik')).toEqual('333@gmail.com')
            })
        })
        describe('remove', () => {
            test('main', () => {
                object.remove('John')
                object.remove('Noya')
                expect(object.table).toEqual({
                    [HashCode('Mike')]: {
                        head: {
                            element: { key: 'Mike', value: '111@gmail.com' },
                            next: {
                                element: {
                                    key: 'Mkie',
                                    value: '222@gmail.com'
                                },
                                next: {
                                    element: {
                                        key: 'Meik',
                                        value: '333@gmail.com'
                                    },
                                    next: null
                                }
                            }
                        },
                        length: 3
                    }
                })
            })
            test('remove with hash collision', () => {
                object.remove('Mike')
                object.remove('Meik')
                expect(object.table[HashCode('Mike')]).toEqual({
                    head: {
                        element: { key: 'Mkie', value: '222@gmail.com' },
                        next: null
                    },
                    length: 1
                })
                object.remove('Mkie')
                expect(object.table[HashCode('Mike')]).toEqual(undefined)
            })
        })
    })
})
