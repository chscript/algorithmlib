import { bubbleSort, insertSort, quickSort, mergeSort } from '../index'
import { describe, expect, test } from 'vitest'

describe('Sort', () => {
    const numArray: number[] = [25, 22, 21, 21, 23]
    const strArray: string[] = ['C', 'B', 'D', 'A', 'E']
    const objArray: Array<{ name: string; age: number }> = [
        { name: 'A', age: 25 },
        { name: 'B', age: 22 },
        { name: 'C', age: 21 },
        { name: 'D', age: 21 },
        { name: 'E', age: 23 }
    ]
    describe('bubbleSort', () => {
        test('main', () => {
            expect(
                bubbleSort(numArray, (a, b) => {
                    return a - b
                })
            ).toEqual([21, 21, 22, 23, 25])
            expect(
                bubbleSort(numArray, (a, b) => {
                    return b - a
                })
            ).toEqual([25, 23, 22, 21, 21])
            expect(bubbleSort(strArray)).toEqual(['A', 'B', 'C', 'D', 'E'])
            expect(
                bubbleSort(objArray, (a, b) => {
                    return a.age - b.age
                })
            ).toEqual([
                { name: 'C', age: 21 },
                { name: 'D', age: 21 },
                { name: 'B', age: 22 },
                { name: 'E', age: 23 },
                { name: 'A', age: 25 }
            ])
            expect(
                bubbleSort(objArray, (a, b) => {
                    return b.age - a.age
                })
            ).toEqual([
                { name: 'A', age: 25 },
                { name: 'E', age: 23 },
                { name: 'B', age: 22 },
                { name: 'C', age: 21 },
                { name: 'D', age: 21 }
            ])
        })
    })
    describe('insertSort', () => {
        test('main', () => {
            expect(
                insertSort(numArray, (a, b) => {
                    return a - b
                })
            ).toEqual([21, 21, 22, 23, 25])
            expect(
                insertSort(numArray, (a, b) => {
                    return b - a
                })
            ).toEqual([25, 23, 22, 21, 21])
            expect(insertSort(strArray)).toEqual(['A', 'B', 'C', 'D', 'E'])
            expect(
                insertSort(objArray, (a, b) => {
                    return a.age - b.age
                })
            ).toEqual([
                { name: 'C', age: 21 },
                { name: 'D', age: 21 },
                { name: 'B', age: 22 },
                { name: 'E', age: 23 },
                { name: 'A', age: 25 }
            ])
            expect(
                insertSort(objArray, (a, b) => {
                    return b.age - a.age
                })
            ).toEqual([
                { name: 'A', age: 25 },
                { name: 'E', age: 23 },
                { name: 'B', age: 22 },
                { name: 'C', age: 21 },
                { name: 'D', age: 21 }
            ])
        })
    })
    describe('quickSort', () => {
        test('main', () => {
            expect(
                quickSort(numArray, (a, b) => {
                    return a - b
                })
            ).toEqual([21, 21, 22, 23, 25])
            expect(
                quickSort(numArray, (a, b) => {
                    return b - a
                })
            ).toEqual([25, 23, 22, 21, 21])
            expect(quickSort(strArray)).toEqual(['A', 'B', 'C', 'D', 'E'])
            expect(
                quickSort(objArray, (a, b) => {
                    return a.age - b.age
                })
            ).toEqual([
                { name: 'C', age: 21 },
                { name: 'D', age: 21 },
                { name: 'B', age: 22 },
                { name: 'E', age: 23 },
                { name: 'A', age: 25 }
            ])
            expect(
                quickSort(objArray, (a, b) => {
                    return b.age - a.age
                })
            ).toEqual([
                { name: 'A', age: 25 },
                { name: 'E', age: 23 },
                { name: 'B', age: 22 },
                { name: 'C', age: 21 },
                { name: 'D', age: 21 }
            ])
        })
    })
    describe('mergeSort', () => {
        test('main', () => {
            expect(
                mergeSort(numArray, (a, b) => {
                    return a - b
                })
            ).toEqual([21, 21, 22, 23, 25])
            expect(
                mergeSort(numArray, (a, b) => {
                    return b - a
                })
            ).toEqual([25, 23, 22, 21, 21])
            expect(mergeSort(strArray)).toEqual(['A', 'B', 'C', 'D', 'E'])
            expect(
                mergeSort(objArray, (a, b) => {
                    return a.age - b.age
                })
            ).toEqual([
                { name: 'C', age: 21 },
                { name: 'D', age: 21 },
                { name: 'B', age: 22 },
                { name: 'E', age: 23 },
                { name: 'A', age: 25 }
            ])
            expect(
                mergeSort(objArray, (a, b) => {
                    return b.age - a.age
                })
            ).toEqual([
                { name: 'A', age: 25 },
                { name: 'E', age: 23 },
                { name: 'B', age: 22 },
                { name: 'C', age: 21 },
                { name: 'D', age: 21 }
            ])
        })
    })
})
