function templateStringDemo () {
  let name = 'Bob'
  let timeofDay = 'morning'
  console.log(`Hello ${name}. Good ${timeofDay}`)
}

module.exports = {
  stringDemo: templateStringDemo
}
