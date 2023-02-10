import { quickSort } from '../sort/quick-sort'

function isObject(obj: number | object, key: string) {
    return (
        obj !== null && typeof obj === 'object' && typeof obj[key] === 'number'
    )
}

export function binarySearch<T>(
    array: T[],
    target: number | { [key: string]: number }
): number | boolean {
    const key = Object.keys(target)[0]
    const bool = isObject(target, key)
    array = quickSort<any>(array, (a, b) => {
        return bool ? a[key] - b[key] : a - b
    })
    let start = 0,
        end: number = array.length - 1
    target = bool ? target[key] : target
    while (start <= end) {
        const mid = Math.floor((start + end) / 2)
        const index = bool ? array[mid][key] : array[mid]
        if (target > index) {
            start = mid + 1
        } else if (target < index) {
            end = mid - 1
        } else if (target === index) {
            return mid
        }
    }
    return false
}
