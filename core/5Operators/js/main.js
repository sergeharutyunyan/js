/*
console.log(Boolean(""));
console.log(typeof 10);
let abc;

console.log(typeof abc === "undefined");
console.log(!!'' + '..');

function bf(a){
    console.log(a ||  "abc")   ;
}

bf("hi");
*/

/*
let a = 10;

a && console.log("done");

let b;

b && console.log("done");*/

/*
const button = {
    width: 200,
    text: "Buy",
    color : "Black"
}

const redButton ={
    ...button,
    color : "red"
}
console.table(redButton)
*/


/*
const buttonInfo = {
    text : "Buy"
}

const buttonStyle={
    color: "yellow",
    width : 200,
    height: 300
}

const button = {
    ...buttonInfo,
    ...buttonStyle,
}


console.table(button)

console.log(Boolean({}));
*/


const hello = "Hello";
const world = "world";

const greeting = hello + " " + world;

console.log(greeting)


const greetingTemplate = `${hello} ${world}`;

console.log(greetingTemplate);
