function Person(fName ,lName){
    this.firstName =fName
    this.lastName =lName
}
Person.prototype.getFullName = function(){
    return this.firstName + ' '  +this.lastName
}
function Superhero(fName , lName){
    //this ={}
    Person.call(this , fName ,lName)
    this.isSuperHero =true
}

Superhero.prototype.fightCrime = function () {
console.log('Fighting crime');
}

Superhero.prototype =Object.create(Person.prototype)
const bastman = new Superhero('Brusce' , 'Wayene')

Superhero.prototype.constructor =Superhero
console.log(bastman.getFullName());
