<h1 align="center">Algorithmlib</h1>

<p align="center" >
<img  src="https://img.shields.io/badge/build-passing-brightgreen" />
<img  src="https://img.shields.io/badge/coverage-94%25-green" />
<img  src="https://img.shields.io/badge/npm-v2.0.3-blue" />
<img  src="https://img.shields.io/badge/cdnjs-v2.0.3-blue" />
<img  src="https://img.shields.io/badge/downloads-200+-brightgreen" />
<img  src="https://img.shields.io/badge/License-MIT-green" />
</p>

<p align="center">
  <a href="https://github.com/chscript/algorithmlib/blob/main/README_zh.md">中文</a>｜
  <a href="https://github.com/chscript/algorithmlib/blob/main/README.md">English</a></p>

## Overview

Algorithmlib is an algorithm library that supports Common. js and ES module syntax. It can be applied to Node.js projects or projects built through ES modules to reduce the time spent in handwriting data structures or algorithms in JavaScript or TypeScript projects.

## Quick Start Guide

### Install

```shell
npm install algorithmlib
```

### Demo

1. Import `Stack` through ES module syntax

```javascript
import { Stack } from 'algorithmlib'
let a = new Stack()
a.push('element')
a.pop()
```

2. Import `Stack` through Common.js syntax

```javascript
const { Stack } = require('algorithmlib')
let a = new Stack()
a.push('element')
a.pop()
```

3. Import `Stack` through `<script>` tag

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./node_modules/algorithmlib/dist/index.iife.js"></script>
</head>
<body>
    <script>
        const { Stack } = algorithmlib
        let a = new Stack()
        a.push('element')
        a.pop()
    </script>
</body>
</html>
```

## API Reference

**Stack\<T>**

- pop(): T | undefined
- push(element: T): Stack\<T>
- isEmpty(): boolean

**Queue\<T>**

- dequeue(): T | undefined
- enqueue(element: T): Queue\<T>
- isEmpty(): boolean

**LinkedList\<T>**

- indexOf(element: T): number
- insert(element: T, index?: number): LinkedList\<T>
- remove(index: number): boolean
- isEmpty(): boolean

**HashTable<K extends number | string, V>**

- get(key: K): V | undefined
- set(key: K, value: V): HashTable<K, V>
- remove(key: K): boolean
- isEmpty(): boolean

**BinarySearchTree\<T>**

- min():  BinarySearchTreeNode\<T> | null
- max():  BinarySearchTreeNode\<T> | null
- minNode(node:  BinarySearchTreeNode\<T> | null):  BinarySearchTreeNode\<T> | null
- maxNode(node:  BinarySearchTreeNode\<T> | null):  BinarySearchTreeNode\<T> | null
- insert(index: number, element: T): BinarySearchTree\<T>
- search(index: number): boolean
- remove(index: number): boolean
- isEmpty(): boolean

**Binary Tree Traversal**

- preOrderTraversal: \<T>(tree: BinarySearchTree\<T>) => { index: number; element: T }[]
- postOrderTraversal: \<T>(tree: BinarySearchTree\<T>) => { index: number; element: T }[]
- inOrderTraversal: \<T>(tree: BinarySearchTree\<T>) => { index: number; element: T }[]
- levelOrderTraversal: \<T>(tree: BinarySearchTree\<T>) => { index: number; element: T }\[][]

**Graph\<T extends string>**

- addVertex(...vertices: K[]): Graph\<K>
- addEdge(v: K, edges: Array<[K, number | null]>): Graph\<K>
- removeVertex(v: K): Graph\<K>
- removeEdge(v: K, w: K): Graph\<K>

**Graph Traversal**

- breadthFirstSearch: \<K>(graph: Graph\<K>, startVertex: K) => K[]
- depthFirstSearch: \<K>(graph: Graph\<K>, startVertex: K) => K[]

**Sort Algorithm**

- bubbleSort\<T>: (array: T[], compare?: sortedCallbackFuction\<T>) => T[];
- insertSort\<T>: (array: T[], compare?: sortedCallbackFuction\<T>) => T[];
- quickSort\<T>: (array: T[], compare?: sortedCallbackFuction\<T>) => T[];
- mergeSort\<T>: (array: T[], compare?: sortedCallbackFuction\<T>) => T[];

**Search Algorithm**

- binarySearch\<T>: (array: T[], target: number | { [key: string]: number }) => number | boolean

## License

[MIT](https://github.com/chscript/algorithmlib/blob/main/LICENSE)

Copyright (c) 2023-present Steve Yang