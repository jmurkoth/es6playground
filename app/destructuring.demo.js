 function destruct () {
    // array destructuring
   var [a,, , b] = [1, 2, 3, 4, 5, 6]
   console.log(`the value of a is ${a} and b is ${b}`)
    // object destructuring
   const obj = { first: 'Jane', last: 'Doe' }
   const {first: f, last: l} = obj
   console.log(`the value of f is ${f} and l is ${l}`)
   const {first, last} = obj
   console.log(`the value of first is ${first} and last is ${last}`)
    // default values
   let a1, b1;
   [a1 = 5, b1 = 7] = [1]
   console.log(a1) // 1
   console.log(b1) // 7
    // default parameters
   drawES6Chart({cords: { x: 18, y: 30 }, radius: 30})
   someMethod({ name: 'bar', val: 42 })
 }
 function drawES6Chart ({size = 'big', cords = { x: 0, y: 0 }, radius = 25} = {}) {
   console.log(`size is a default value of size :${size} cords:${cords} radius:${radius}`)
  // do some chart drawing
 }
 function someMethod ({ name, val }) {
   console.log(name, val)
 }
 module.exports = {
   destruct: destruct
 }
