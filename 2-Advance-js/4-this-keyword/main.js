function saymyname(name){
console.log(`My name is ${name}`);
}
saymyname('walter White')
saymyname('Heisenberh')


//implicit bnding 
const person = {
     name : 'Chandu',
     saymtnametoo: function (){
        console.log("implicit==>",`My name is ${this.name}`);
     }
}
person.saymtnametoo()

//Explicit Binding 
function sayname(){
    console.log("Explicit==>",`My name is ${this.name}`);
}
sayname.call(person)

//New Binding
function Person(name){
    //this ={}
this.name = name
}
const p1 = new Person('bhushan')
const p2 = new Person('chandra')
console.log("New==>",p1.name ,p2.name);

//Default binding
// const name = 'super man'
globalThis.name = 'superman'
sayname()
