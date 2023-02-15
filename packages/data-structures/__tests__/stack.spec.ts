import { Stack } from '../index'
import { describe, expect, test } from 'vitest'

describe('Stack Test', () => {
    describe('Method', () => {
        const object: Stack<number> = new Stack()
        describe('push', () => {
            test('main', () => {
                object.push(1).push(2).push(3)
                expect(object.stack).toEqual([1, 2, 3])
            })
        })
        describe('pop', () => {
            test('main', () => {
                object.pop()
                object.pop()
                object.pop()
                expect(object.stack).toEqual([])
            })
        })
    })
})
