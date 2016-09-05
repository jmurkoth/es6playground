
function testPromise (duration = 20) {
  console.log('starting the promise')
  var p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`p1 completed after ${duration * 1000}`)
    }, duration * 1000)
  })

  var p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('P2 has resolved')
    }, 3000)
  })

  p2.then((val) => { console.log(val) })
  p1.then((val) => { console.log(`P1 resolved  and fired after ${val} milliseconds`) })
}

function allPromise () {
  let duration = 5
  var p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`p1 completed after ${duration * 1000}`)
    }, duration * 1000)
  })

  var p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('P2 has resolved')
    }, 3000)
  })
  console.log('**starting the all promise**')

  Promise.all([p1, p2]).then(values => {
    console.log(`p1 :${values[0]}`)
    console.log(`p2: ${values[1]}`)
    console.log('fired after both')
  })
}

module.exports = {
  testprom: testPromise,
  allprom: allPromise
}
