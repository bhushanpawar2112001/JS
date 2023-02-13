function Person(fName ,lName){
    this.firstName =fName
    this.lastName =lName
}

const person1 =new Person('Brus' , 'Lee')
const person2 =new Person('Clark' , 'kent')

// person1.getFullName =function(){
//   return this.firstName + ' '  +this.lastName
// } //*****it will give an error with person2 */

Person.prototype.getFullName = function(){
    return this.firstName + ' '  +this.lastName
}
console.log(person1.getFullName());
console.log(person2.getFullName());
