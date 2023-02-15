// import resolve from '@rollup/plugin-node-resolve'
// import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
// import dts from 'rollup-plugin-dts'
export default [
    {
        input: 'index.ts',
        output: [
            {
                file: 'dist/index.cjs',
                format: 'cjs'
            },
            {
                file: 'dist/index.mjs',
                format: 'esm'
            },
            {
                name: 'algorithmlib',
                file: 'dist/index.iife.js',
                format: 'iife'
            }
        ],
        plugins: [
            // resolve(),
            // commonjs(),
            typescript({
                tsconfig: 'tsconfig.json'
            })
        ]
    }
    // {
    //     // 类型声明文件合并
    //     input: 'dist/types/index.d.ts',
    //     output: [
    //         {
    //             file: 'dist/types/index.d.ts',
    //             format: 'es'
    //         }
    //     ],
    //     plugins: [dts()]
    // }
]
