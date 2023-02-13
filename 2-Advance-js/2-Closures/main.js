function outer(){
    let counter =0 
    function inner (){
        counter++ 
        console.log(counter);
    }
    inner()
}
outer()
outer()

//closer in js
function outer1(){
    let counter =0 
    function inner1 (){
        counter++ 
        console.log(counter);
    }
   return inner1
}
 const fn =  outer1()
fn()
fn()