
let sqrt = (x) => { return x * x }

let arr = [1, 2, 3, 4, 5]

function arrLoop () {
  arr.forEach(c => {
    console.log(sqrt(c))
  })
}

module.exports = {
  sqrt: sqrt,
  arrLoop: arrLoop
}
