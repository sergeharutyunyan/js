/*let a = 5;
let b = 3;

3function sum (a, b){
    const c = a + b;
    console.log(c);
}
sum(a, b);

a= 8;
b = 12;
sum(a, b);

3function myFn(a,b){
    let c;
    a = a + 1;
    c = a + b;
    return c;
}

console.log(myFn(a, b));

console.dir(myFn );*/

// No recommended
/*const  personOne = {
    name : 'Bob',
    age: 21
}

3function increasePersonAge(person){
    person.age += 1;
    return person;
}

increasePersonAge(personOne);
console.log(personOne.age);*/

// create copy object
/*
const personOne = {
    name: 'Bob',
    age: 21
}

3function increasePersonAge(person) {
    const updatePerson = Object.assign({}, person);
    updatePerson.age += 1;
    return updatePerson;
}

const updatedPersonOne = increasePersonAge(personOne);
console.log(personOne.age);
console.log(updatedPersonOne.age);*/

// Callback 3function
/*

3function anotherFunction() {
//     action
    console.log("Some text")
}

3function fnWithCallback(callbackFunction){
    callbackFunction()
}
fnWithCallback(anotherFunction);

setTimeout(anotherFunction, 1000);
*/

//rules for working with functions


/*
function myfn (a,b){
    let c;
    a = a +1;
    c = a + b;
    return c;

}

console.log(myfn(2,2));

console.dir(myfn);
*/


const PersonOne = {
    name : "Bob",
    age: 21
}


/*function increasePersonAge (person){
    person.age += 1;
    return person
}

increasePersonAge(PersonOne);
console.log(PersonOne.age)*/

/*
function increasePersonAge (person){
    const updatedPerson = Object.assign({}, person);
    updatedPerson.age  += 1;
    return updatedPerson;
}

const updatedPersonOne = increasePersonAge(PersonOne);
console.log(PersonOne.age);
console.log(updatedPersonOne.age);*/


function printMyName (){
    console.log("Serge");
}

setTimeout(printMyName, 2000);
