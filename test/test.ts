import * as prettier from 'prettier'
const format = (code: string) => {
  const res = prettier.format(code, {
    parser: 'ts-parser',
    plugins: ['./dist/index.js']
  })
  return res
}
console.log(await format(`['1'].map((x) => parseInt(x))`))
// ['1'].map(parseInt)