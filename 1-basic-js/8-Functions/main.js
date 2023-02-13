//function without perameters 
function greet(){
    console.log('good morning indore');
}
greet()

//function with perametors
function greet2(data){
console.log(`good afternoon ` + data );
}
greet2('bhushan')
greet2('chandu')


function add(a ,b){
return a +  b
}
const sum = add(4 ,5)
console.log("add==>" ,sum);

//arrowfunction
// const arrowsum = (c , d)=>  {
// return c +d 
// } 
const arrowsum =(c , d)=>c +d 


const asum =arrowsum(8 , 9)
console.log('sum==>' , asum);