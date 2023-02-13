//for loop
/* for(initializer ; condition ; final-expression){
      code to run
} */ 
for(let i =1 ; i<=5 ; i++){
    console.log('iteration number ' + i);
}

//while loop
 /*initializer 
 while (condition){
    //code to run 
    final-expression 
 }*/
 let j = 1
 while(j<=5){
console.log('itration by while ' ,j);
j++
 }

//Do ..while loop
/*initializer 
do{
    //code to run
}while(condition)*/
let k =6
do{
console.log('itration by Do while ' ,k);
k++
}while(k<=5)


//for.. of loop 
/*for(const item of array){
    //  code to run
} */
const num = [1,2,3,4,5]
for(const item of num  ){
    console.log("itration by for of loop" ,item);
}