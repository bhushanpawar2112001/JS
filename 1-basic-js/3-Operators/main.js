//1* Assingnment Operator 
let x = 10

//2* Arithemetic Operators 
let y = 11
let z = 5 
console.log("sum",y+z); 
console.log("minus",y-z); 
console.log("multiplication",y*z); 
console.log("divide",y/z); 
console.log("modules",y%z); 
console.log("incriment" , ++y);
console.log("dicriment" , --z);

//3* Comparison Operator 
console.log("Comparison==>",x == y);
console.log("Comparison==>", x != y);
console.log("Comparison==>",x === y); //  data type should be  also equal
console.log("Comparison==>",x !== y);
console.log("Comparison==>",x > y);
console.log("Comparison==>",x < y);
console.log("Comparison==>",x >= y);
console.log("Comparison==>",x <= y);

//4* logical Oprators  
const isValidNumebr = x > 8 && 8 < y //(and) both should be correct
console.log("logicaloprator=>" ,isValidNumebr);

const isValidNumebr1 = x > 20 || 8 < y //(Or) one of them should correct
console.log("logicaloprator=>" ,isValidNumebr1);

const isValid = true //(not) neagates the value
console.log("logicaloprator=>" ,!isValid);

//5* String Oprators
console.log("joint two" + "or more strings");
  
//ternury oprator 
const isEven  = 10 % 2 === 0 ? true: false
console.log("ternury==>",isEven);
