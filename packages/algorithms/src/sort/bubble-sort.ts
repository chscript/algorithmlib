import { defaultCompare, sortedCallbackFuction } from '@algorithmlib/shared'

// 鸡尾酒排序（双向冒泡排序）
export function bubbleSort<T>(
    array: T[],
    compare: sortedCallbackFuction<T> = defaultCompare
): T[] {
    let lastSwapLeftIndex = 0
    let lastSwapRightIndex: number = array.length - 1
    let leftBorder: number = lastSwapLeftIndex
    let rightBorder: number = lastSwapRightIndex
    for (let i = 0; i < array.length / 2; i++) {
        let isSorted = true
        for (let j = leftBorder; j < rightBorder; j++) {
            if (compare(array[j + 1], array[j]) < 0) {
                ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
                isSorted = false
                lastSwapRightIndex = j
            }
        }
        if (isSorted) {
            break
        }
        rightBorder = lastSwapRightIndex
        for (let j = rightBorder; j > leftBorder; j--) {
            if (compare(array[j - 1], array[j]) > 0) {
                ;[array[j], array[j - 1]] = [array[j - 1], array[j]]
                isSorted = false
                lastSwapLeftIndex = j
            }
        }
        if (isSorted) {
            break
        }
        leftBorder = lastSwapLeftIndex
    }
    return array
}

// 优化冒泡排序
// function bubbleSort<T>(
//     array: T[],
//     compare: sortedCallbackFuction<T> = defaultCompare): T[] {
//     let lastSwapIndex = array.length - 1
//     for (let i = 0; i < array.length - 1; i++) {
//         let isSorted: boolean = true
//         let border: number = lastSwapIndex
//         for (let j = 0; j < border; j++) {
//             if (compare(array[j + 1], array[j]) < 0) {
//                 ([array[j], array[j + 1]] = [array[j + 1], array[j]])
//                 isSorted = false
//                 lastSwapIndex = j
//             }
//         }
//         if (isSorted) { break }
//     }
//     return array
// }

// 初始冒泡算法
// function bubbleSort<T>(
//     array: T[],
//     compare: sortedCallbackFuction<T> = defaultCompare): T[] {
//     for (let i = 0; i < array.length - 1; i++) {
//         for (let j = 0; j < array.length - i - 1; j++) {
//             if (compare(array[j + 1], array[j]) < 0) {
//                 ([array[j], array[j + 1]] = [array[j + 1], array[j]])
//             }
//         }
//     }
//     return array
// }
