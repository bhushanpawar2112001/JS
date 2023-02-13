
//if condition
const num = 5
if(num> 0){
console.log('Number is Positive')
}
const num1 = -5
if(num1> 0){
console.log('2nd number is Positive')
}

//if and else condition
if(num1> 0){
    console.log('2nd number is Positive')
}
else{
    console.log('this is the else statement')
}

//if , else if and else
if(num1 > 0){
    console.log('Number is Positive')
}
else if(num1<0){
    console.log('Number is negative')
}
else{
    console.log('Number is 0')
}

//switch statement
const color = 'green'
switch(color){
    case 'red':
    console.log('color is red');
    break;

    case 'blue':
    console.log('color is blue');
    break;

    case 'green':
    console.log('color is green');
    break;

    case 'yellow':
    console.log('color is yellow');
    break;

    default:
    console.log('not a valid color');
}