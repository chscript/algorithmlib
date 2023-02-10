import { defaultCompare, sortedCallbackFuction } from './tools'
export function insertSort<T>(
    array: T[],
    compare: sortedCallbackFuction<T> = defaultCompare
): T[] {
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j > 0; j--) {
            if (compare(array[j], array[j - 1]) < 0) {
                ;[array[j - 1], array[j]] = [array[j], array[j - 1]]
            } else {
                break
            }
        }
    }
    return array
}
