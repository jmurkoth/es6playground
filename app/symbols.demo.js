
 function symbolDemo () {
   console.log('symbol demo')
   var sym2 = Symbol('foo')
   var sym3 = Symbol('foo')
   if (sym2 === sym3) {
     console.log('sym2 and sym3 are equal')
   } else {
     console.log('sym2 and sym3 are not equal')
   }
   console.log(`Type of Sym3 is : ${typeof (sym3)}`)
 }

 function symbolMethodDef () {
   const propname = Symbol('my_prop')
   const propname1 = Symbol('my_prop1')
   var obj = {
     [propname]: 101,
     'Name': 'test',
     [propname1]: 'Hello'
   }
   console.log(Object.getOwnPropertySymbols(obj))
   console.log(Object.getOwnPropertyNames(obj))
   console.log(`Value of Property is ${obj[propname]}`)
 }

 export {symbolDemo, symbolMethodDef}
