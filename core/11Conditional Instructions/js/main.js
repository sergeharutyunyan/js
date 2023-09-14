/*
let val = 10;
if(val > 5){
    val += 20;
}
console.log(val);

const person ={
    age: 20
}
if(!person.name){
    console.log("name not specified")
}


*/

/*

let val = 10;

if (val < 5) {
    val += 20;
} else {
    val -= 20;
}

console.log(val)
*/
/*

const age = 77;
if(age > 18){
    console.log("Is adult")
}else if(age >= 12){
    console.log("Is teenager")
}else{
    console.log("Is child")
}

*/
/*
const age = 17;
if (age > 18) {
    console.log("Is adult")
}
if (age >= 12 && age <18) {
    console.log("Is teenager")
}
if(age < 12){
    console.log("Is child")
}
*/

/*const sumPositiveNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'One of the arguments is not a number'
    }
    if (a <= 0 || b <= 0) {
        return "Numbers are not positive"
    }
    return a + b;
}
console.log(sumPositiveNumbers("aaaa", 5));
console.log(sumPositiveNumbers("5", 5));
console.log(sumPositiveNumbers(5, 5));
console.log(sumPositiveNumbers(-5, 5));
console.log(sumPositiveNumbers(0, 5));*/


const month = 2;


switch (month) {
    case 12:
        console.log("December")
        break
    case 1:
        console.log("January")
        break
    case 2:
        console.log("February")
        break
    default:
        console.log("it's not a winter month")
}

