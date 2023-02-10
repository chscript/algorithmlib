import { Queue } from '../../index'
import { describe, expect, test } from 'vitest'

describe('Queue', () => {
    describe('Method', () => {
        const object: Queue<number> = new Queue()
        describe('enqueue', () => {
            test('main', () => {
                object.enqueue(1).enqueue(2).enqueue(3)
                expect(object.queue).toEqual([1, 2, 3])
            })
        })
        describe('dequeue', () => {
            test('main', () => {
                object.dequeue()
                object.dequeue()
                object.dequeue()
                expect(object.queue).toEqual([])
            })
        })
    })
})
