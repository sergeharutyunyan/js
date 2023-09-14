/*
const myFunction = function (a, b){
    let c;
    a = a + 1;
    c = a + b;
    return c;
}
console.log(myFunction(5, 4))

setTimeout(function (){
    console.log('delayed message')
}, 2000)
*/

/*const myFunction = (a, b) => {
    let c;
    a = a + 1;
    c = a + b;
    return c;
}

console.log(myFunction(4, 3))


setTimeout(() => {
    console.log('delayed message')
}, 2000)


const sum = (a, b) => a + b;

console.log(sum(3,4));*/

/*
function multByFactor(value, multiplier = 1) {
    return value * multiplier;
}

console.log(multByFactor(5,2));
console.log(multByFactor(5));
*/


/*
const  multByFactor = function (value, multiplier = 1) {
    return value * multiplier;
}

console.log(multByFactor(5,2));
console.log(multByFactor(5));
*/

/*
const  multByFactor =  (value, multiplier = 1) => value * multiplier;


console.log(multByFactor(5,2));
console.log(multByFactor(5));
*/


/*
const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
})
*/

const newPost = (post, addedAt = Date()) => {
    const newObj = {
        ...post,
        "addedAt":addedAt,
    }
  return newObj;
}

const firstPost = {
    id: 1,
    author: "Serge"
}
const firstPostHasDate = newPost(firstPost)
console.table(firstPostHasDate);

