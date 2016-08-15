 import {Employee} from './employeeClass'

 let c = new Employee('John', 'Doe')
 console.log(c.toString())
 console.log(c.firstName)
 console.log(c.fullName)
 if (c instanceof Employee) {
   console.log(' c is Employee ')
 }

