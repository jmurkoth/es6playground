
function testPromise (duration = 20) {
  console.log('starting the promise')
  var p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(duration * 1000)
    }, duration * 1000)
  })

  p1.then((val) => { console.log(`then fired after ${val} millisect`) })
}

module.exports = {
  testprom: testPromise
}
