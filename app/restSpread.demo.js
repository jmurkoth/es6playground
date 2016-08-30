function f (x, y, ...a) {
  console.log(`Rest Demo :->x:${x} y:${y} a:${a}`)
  return (x + y) * a.length
}
function defValue (x, y = 12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y
}

function func (x, y, z) {
  console.log(`spread Demo :->x:${x} y:${y} z:${z}`)
  return x + y + z
}
function restdemo () {
  console.log(f(1, 2, 4, 5, 6, 7, 8))
}
function spreadDemo () {
  let arr = [9, 1, 4, 5, 6, 7, 8]
  console.log(`Spread Value: ${func(...arr)}`)
}

module.exports = {
  restdemo: restdemo,
  defValue: defValue,
  spreaddemo: spreadDemo
}
