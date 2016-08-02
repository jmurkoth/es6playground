
export class Employee {
  
    constructor( firstName, lastName) {
        this.firstName= firstName;
        this.lastName= lastName;
    };

     toString() {
        return `My Name is ${this.firstName}, ${this.lastName}`;
    };
}