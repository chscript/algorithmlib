import { defaultCompare, sortedCallbackFuction } from '@algorithmlib/shared'
function merge<T>(
    left: T[],
    right: T[],
    compare: sortedCallbackFuction<T> = defaultCompare
): T[] {
    let i = 0,
        j = 0,
        end: T[] = []
    const result: T[] = []
    while (i < left.length && j < right.length) {
        if (compare(left[i], right[j]) <= 0) {
            result.push(left[i++])
        } else {
            result.push(right[j++])
        }
    }
    if (i < left.length && j === right.length) {
        end = left.slice(i)
    } else if (j < right.length && i === left.length) {
        end = right.slice(j)
    }
    return result.concat(end)
}
export function mergeSort<T>(
    array: T[],
    compare: sortedCallbackFuction<T> = defaultCompare
): T[] {
    if (array.length > 1) {
        const { length } = array
        const middle = Math.floor(length / 2)
        const left: T[] = mergeSort(array.slice(0, middle), compare)
        const right: T[] = mergeSort(array.slice(middle, length), compare)
        array = merge(left, right, compare)
    }
    return array
}
