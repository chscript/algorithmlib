// 定义回调函数
export type sortedCallbackFuction<T> = (a: T, b: T) => number
// 默认按字符串编码排序
export const defaultCompare: sortedCallbackFuction<any> = (a, b): number => {
    return a.toString().charCodeAt(0) - b.toString().charCodeAt(0)
}
