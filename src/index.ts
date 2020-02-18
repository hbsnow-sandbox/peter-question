/* eslint-disable @typescript-eslint/explicit-function-return-type */
const min = 123456789
const max = 987654321

const result = []
for (let i = min; i <= max; i++) {
  const target = i

  // 0は含めない
  if (target.toString().indexOf('0') !== -1) continue
  result.push(target)
  console.log(result.length)
}
