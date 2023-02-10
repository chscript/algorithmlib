// Update the version number in README.md

import fs from 'node:fs'
import npm from '../package.json' assert { type: 'json' }

const READMEs = ['./README.md', './README_zh.md']

const versionRegExp =
    /(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?/g

function UpdateVersion(versionNumber, readmeDocument, labelColor) {
    fs.readFile(readmeDocument, 'utf-8', (err, data) => {
        if (err) {
            throw err
        }
        fs.writeFile(
            readmeDocument,
            data.replace(
                versionRegExp,
                versionNumber.replace('-', '--') + labelColor
            ),
            'utf-8',
            err => {
                if (err) {
                    throw err
                }
            }
        )
    })
}

READMEs.forEach(readme => {
    UpdateVersion(npm.version, readme, '-blue')
})
