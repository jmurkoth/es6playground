
class Person {
  constructor (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  };

    // get firstName(){
    //     return `FName is ${ this.firstName}`;
    // }
    //  get lastName(){
    //     return `LName is ${ this.lastName}`;
    // }
  get fullName () {
    return `${this.lastName}, ${this.firstName}`
  }
  toString () {
    return `My Name is ${this.firstName}, ${this.lastName}`
  };
}

export class Employee extends Person {

}
