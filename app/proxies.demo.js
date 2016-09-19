//  The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).
function simpleProxy () {
  var target = {'hell': 999}
  var handler = {}
  var proxy = new Proxy(target, handler)
  proxy.a = 'b'
  console.log(target.hell) // Property on the object
  console.log(target.a) // property received via proxy
// <- 'b'
  console.log(proxy.c === undefined)
// <- true
}

function trapProxy () {
  var handler = {
    get (target, key) {
      console.info(`get on property '${key}' `)
      return target[key] // can even intercept and return a new value
    }
  }
  var target = {'hell': 999}
  var proxy = new Proxy(target, handler)
  proxy.small = 'hello small value'
  console.log(proxy.hell) // property from the target
  console.log(proxy.small)
}

function getSetCheckProxy () {
  var handler = {
    get (target, key) {
      invariant(key, 'get')
      return target[key]
    },
    set (target, key, value) {
      invariant(key, 'set')
      target[key] = value
      return true
    }
  }
  //
  var target = {'hell': 999}
  var p1 = new Proxy(target, handler)
  p1.myval = 'asdfdsf'
  console.log(p1.myval)
  console.log(p1.hell)
  try {
    p1._prop = 'sdfdsfds'
  } catch (err) {
    console.error(err)
  }
}
function invariant (key, action) {
  if (key[0] === '_') {
    throw new Error(`Invalid attempt to ${action} private "${key}" property`)
  }
}

function validateProxy () {
  var validator = {
    set (target, key, value) {
      if (key === 'age') {
        if (typeof value !== 'number' || Number.isNaN(value)) {
          throw new TypeError('Age must be a number')
        }
        if (value <= 0) {
          throw new TypeError('Age must be a positive number')
        }
      }
      return true
    }
  }
  var person = { age: 27 }
  var proxy = new Proxy(person, validator)
  try {
    proxy.age = 'foo'
  } catch (err) {
    console.error(err)
  }
// <- TypeError: Age must be a number
  try {
    proxy.age = NaN
  } catch (err) {
    console.error(err)
  }
// <- TypeError: Age must be a number
  try {
    proxy.age = 0
  } catch (err) {
    console.error(err)
  }
// <- TypeError: Age must be a positive number
  proxy.age = 28
  console.log(person.age)
}

function revocableProxy () {
  var target = {}
  var handler = {}
  var {proxy, revoke} = Proxy.revocable(target, handler)
  proxy.a = 'b'
  console.log(proxy.a)
  // <- 'b'
  revoke()

  console.log(proxy.a)
}

export { simpleProxy, trapProxy, getSetCheckProxy, validateProxy, revocableProxy }
