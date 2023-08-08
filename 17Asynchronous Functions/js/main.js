/*
const asyhncFn = async () => {
    return "Success!"
}

console.log(asyhncFn())
*/


/*
const asyhncFn = async () => {
    return "Success!"
}

asyhncFn()
    .then(value => console.log(value))
*/
/*const asyncFn = async () => {
    throw new Error('Thhere was an error!')
}

asyncFn()
    .then(value => console.log(value))
    .catch(error => console.log(error.message))*/

const timerPromise = () =>
    new Promise((resolve, reject) =>
    setTimeout(()=> resolve(), 2000))
