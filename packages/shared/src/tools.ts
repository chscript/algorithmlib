export type sortedCallbackFuction<T> = (a: T, b: T) => number

export const defaultCompare: sortedCallbackFuction<any> = (a, b): number => {
    return a.toString().charCodeAt(0) - b.toString().charCodeAt(0)
}

export const isObject = (obj: number | object, key: string): boolean => {
    return (
        obj !== null && typeof obj === 'object' && typeof obj[key] === 'number'
    )
}
