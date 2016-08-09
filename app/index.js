 import {} from './class.demo';
 import * as constantDemo from './constant.demo';
 import *  as arrowDemo from './arrowfunc.demo';
 import * as desctru from './destructuring.demo';
 import * as restdemo from './restSpread.demo';
 import * as intdemo from './international.demo';
 import * as prom from './promise.demo';

let m=20;
console.log(m);
//constant Demo
console.log(`********************`);
constantDemo.demoCall();
console.log(arrowDemo.sqrt(16));
desctru.destruct();
console.log(restdemo.restdemo(1,2,3,4,5,6,7,8));
console.log(restdemo.defValue(4));
//internationalization
intdemo.numbFormat();
//date format
intdemo.dateFormat();
//promise test
prom.testprom(10);