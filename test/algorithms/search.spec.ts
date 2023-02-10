import { binarySearch } from '../../index'
import { describe, expect, test } from 'vitest'

describe('Search', () => {
    const numArray: number[] = [25, 22, 21, 21, 23]
    const objArray: Array<{ name: string; age: number }> = [
        { name: 'A', age: 25 },
        { name: 'B', age: 22 },
        { name: 'C', age: 21 },
        { name: 'D', age: 21 },
        { name: 'E', age: 23 }
    ]
    describe('binarySearch', () => {
        test('main', () => {
            // 21, 21, 22, 23, 25
            expect(binarySearch(numArray, 21)).toEqual(0)
            expect(binarySearch(objArray, { age: 21 })).toEqual(0)
        })
    })
})
