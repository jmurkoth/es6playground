 import {} from './class.demo'
 import * as constantDemo from './constant.demo'
 import * as arrowDemo from './arrowfunc.demo'
 import * as desctru from './destructuring.demo'
 import * as restdemo from './restSpread.demo'
 import * as intdemo from './international.demo'
 import * as prom from './promise.demo'
 import * as strDemo from './templatestring.demo'
 import {symbolDemo as symdemo, symbolMethodDef as symmethdef} from './symbols.demo'
 import {simpleProxy, trapProxy, getSetCheckProxy, validateProxy, revocableProxy} from './proxies.demo'

 let m = 20
 console.log(m)
// constant Demo
 console.log('********************')
 constantDemo.demoCall()
 console.log(arrowDemo.sqrt(16))
 desctru.destruct()
 restdemo.restdemo()
 console.log(restdemo.defValue(4))
// internationalization
 intdemo.numbFormat()
// date format;
 intdemo.dateFormat()
// promise test
 prom.testprom(10)
 // all promises
 prom.allprom()
 // race
 prom.raceprom()
 // template string
 strDemo.stringDemo()
 // spread demo
 restdemo.spreaddemo()
 // demo for symbols
 symdemo()
 symmethdef()
 simpleProxy()
 trapProxy()
 getSetCheckProxy()
 validateProxy()
 revocableProxy()

