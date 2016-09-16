
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
      resolve(`p1 completed after ${duration * 1000}  at  ${new Date()}`)
    }, duration * 1000)
  })

  var p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`P2 has resolved at  ${new Date()}`)
    }, 3000)
  })
  console.log(`**starting the all promise** at  ${new Date()}`)

  Promise.all([p1, p2]).then(values => {
    console.log(`p1 :${values[0]}`)
    console.log(`p2: ${values[1]}`)
    console.log(` All promise completed after both at at  ${new Date()} ( should match p1 duration)`)
  })
}

function raceprom () {
  let duration = 5
  var p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`p1 completed after ${duration * 1000} at  ${new Date()}`)
    }, duration * 1000)
  })

  var p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`P2 has resolved at  ${new Date()}`)
    }, 500)
  })
  console.log(`**starting the race promise** at  ${new Date()}`)

  Promise.race([p1, p2]).then(value => {
    console.log(` (race):${value} at  ${new Date()}`)
    console.log(`fired after race at  ${new Date()}`)
  })
}

module.exports = {
  testprom: testPromise,
  allprom: allPromise,
  raceprom: raceprom

}
