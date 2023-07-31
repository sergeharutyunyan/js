/*
let a;
let  b;
function myFn (){
    let b;
    a = true;
    b = 10;
    console.log(b);
}
myFn();
console.log("------------")
console.log(a);
console.log(b);
*/

/*
let a = 5;

function myFn(){
    function innerFn(){
        // const a = "kuku";
        console.log(a)
    }
    innerFn();
}
myFn();
*/

/*
let a = "KUKU";
let  b;
function myFn (){
    let b;
    a = true;
    b = 10;
    console.log(b + "bbbbb");
}
myFn();
console.log("------------")
console.log(a);
console.log(b);
*/


/*let a, b;
function myFn(){
    let b;
    a = true;
    b = 10;
    console.log(b + "fn")
}
myFn();

console.log(a);
console.log(b);*/

let a =   5;
function myFn(){
    function innerFn(){
        a = 10;
        console.log(a);
    }
    innerFn();
}

myFn();

