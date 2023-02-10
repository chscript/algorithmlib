import { defaultCompare, sortedCallbackFuction } from './tools'
export function quickSort<T>(
    array: T[],
    compare: sortedCallbackFuction<T> = defaultCompare
): T[] {
    if (array.length < 2) return array
    const left: T[] = [],
        right: T[] = []
    for (let i = 1; i < array.length; i++) {
        if (compare(array[0], array[i]) <= 0) {
            right.push(array[i])
        } else {
            left.push(array[i])
        }
    }
    return quickSort(left, compare).concat(array[0], quickSort(right, compare))
}
