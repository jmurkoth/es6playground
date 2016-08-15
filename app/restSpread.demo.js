function f (x, y, ...a) {
  console.log(`x:${x} y:${y} a:${a}`)
  return (x + y) * a.length
}
function defValue (x, y = 12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y
}

module.exports = {
  restdemo: f,
  defValue: defValue
}
