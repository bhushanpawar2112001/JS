class Person {
   constructor(fName ,lName) {
    this.firstName =fName
    this.lastName =lName
   }
   sayMyName(){
    return this.firstName + ' ' + this.lastName
   }
}

const classP1 = new Person('Bruce' , 'wayne')
console.log(classP1.sayMyName());

class Superhero extends Person {
    constructor(fName ,lName){
        super(fName ,lName)
        this.isSuperHero = true
    }
    fightCrime(){
        console.log('Fight Crime');
    }
}

const batman = new Superhero('bat' , 'man')
console.log(batman.sayMyName());