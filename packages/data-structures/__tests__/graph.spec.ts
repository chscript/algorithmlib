import { Graph } from '../index'
import { describe, expect, test } from 'vitest'

describe('Graph', () => {
    describe('Method', () => {
        const emptyMap = new Map()
        const object: Graph<string> = new Graph()
        describe('addVertex', () => {
            test('main', () => {
                object.addVertex('A', 'B', 'C')
                expect(object.vertices.get('A')).toEqual(emptyMap)
                expect(object.vertices.get('B')).toEqual(emptyMap)
                expect(object.vertices.get('C')).toEqual(emptyMap)
            })
        })
        describe('addEdge', () => {
            test('main', () => {
                object.addEdge('A', [
                    ['B', 10],
                    ['C', 20]
                ])
                object.addEdge('B', [['C', 30]])
                expect(object.vertices.get('A')!.get('B')).toEqual(10)
                expect(object.vertices.get('A')!.get('C')).toEqual(20)
                expect(object.vertices.get('B')!.get('C')).toEqual(30)
                expect(object.vertices.get('C')!.get('A')).toEqual(20)
                expect(object.vertices.get('C')!.get('B')).toEqual(30)
            })
        })
        describe('removeVertex', () => {
            test('main', () => {
                object.removeVertex('B')
                expect(object.vertices.get('B')).toEqual(undefined)
            })
        })
        describe('removeEdge', () => {
            test('main', () => {
                object.removeEdge('A', 'C')
                expect(object.vertices.get('A')).toEqual(emptyMap)
                expect(object.vertices.get('A')!.get('C')).toEqual(undefined)
                expect(object.vertices.get('B')).toEqual(undefined)
                expect(object.vertices.get('C')!.get('A')).toEqual(undefined)
                expect(object.vertices.get('C')).toEqual(emptyMap)
            })
        })
    })
})
