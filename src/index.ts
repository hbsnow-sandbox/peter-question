const isSameNumber = (target: string): boolean => {
  for (let i = 1; i <= 8; i++) {
    const pos = target.slice(i - 1, i)
    if (target.indexOf(pos, i) !== -1) {
      return true
    }
  }
  return false
}

const isPeterOne = (numbers: number[]): boolean => {
  const numerator = [numbers[0], numbers[3], numbers[6]]
  const denominator = [
    10 * numbers[1] + numbers[2],
    10 * numbers[4] + numbers[5],
    10 * numbers[7] + numbers[8]
  ]
  // 分母を払う
  if (
    numerator[0] * denominator[1] * denominator[2] +
      numerator[1] * denominator[0] * denominator[2] +
      numerator[2] * denominator[0] * denominator[1] ===
    denominator[0] * denominator[1] * denominator[2]
  ) {
    return true
  }

  return false
}

(() => {
  const min = 123456789
  const max = 987654321

  for (let i = min; i <= max; i++) {
    const targetStr = i.toString()

    // 0は含めない
    if (targetStr.indexOf('0') !== -1) continue

    // 末尾9の次には必ず0を含めるのでスキップ
    const pos9 = targetStr.slice(-1)
    if (pos9 === '9') {
      i++
      continue
    }

    // 重複する番号を持つものは除外
    if (isSameNumber(targetStr)) continue

    const targetAry = Array.from(targetStr).map(item => parseInt(item))

    if (!isPeterOne(targetAry)) continue

    console.log(
      `${targetAry[0]}/${targetAry[1]}${targetAry[2]} + ` +
      `${targetAry[3]}/${targetAry[4]}${targetAry[5]} + ` +
      `${targetAry[6]}/${targetAry[7]}${targetAry[8]} = 1`
    )
  }
})()
