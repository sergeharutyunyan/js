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

/*
const timerPromise = () =>
    new Promise((resolve, reject) =>
    setTimeout(()=> resolve(), 2000))

const asyncFn = async () =>{
    console.log("Timer start")
    await timerPromise()
    console.log('Timer endend')
}

asyncFn()
*/

/*
const timerPromise = () =>
    new Promise((resolve, reject) =>
        setTimeout(()=> resolve(), 2000))

const asyncFn = async () =>{
    console.log("Timer start")
    const startTime = performance.now()
    console.log(startTime)
    await timerPromise()
    const endTime = performance.now()
    console.log('Timer endend', endTime - startTime)
}

asyncFn()

*/


const getData = async (url) =>{
    const res = await fetch(url)
    const json = await res.json()
    return json
}



const myUrl = 'https://jsonplaceholder.typicode.com/todos/'

try {
    const data = await getData(myUrl)
    console.log(data)
}catch (error){
    console.log(error.message)
}

