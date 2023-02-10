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

## 概述

Algorithmlib是一个支持Common.js和ES模块语法的算法库。它可以应用于Node.js项目或通过ES模块构建的项目，以减少在JavaScript或TypeScript项目中手写数据结构或算法所花费的时间。

## 快速入门指南

### 下载

```shell
npm install algorithmlib
```

### 演示

1. 通过ES module语法导入`Stack`

```javascript
import { Stack } from 'algorithmlib'
let a = new Stack()
a.push('element')
a.pop()
```

2. 通过Common.js语法导入`Stack`

```javascript
const { Stack } = require('algorithmlib')
let a = new Stack()
a.push('element')
a.pop()
```

3. 通过`<scirpt>`标签导入`Stack`

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

## API参考

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