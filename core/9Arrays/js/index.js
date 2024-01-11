const myArray = [1, true, 'a', 2, 10]


/*
myArray.forEach(function (el){
    if(typeof el === "number"){
        console.log(el  + " " +el * 2)
    }
})
*/
/*myArray.forEach(el=> console.log(el)  )*/

// const res = myArray.forEach(el => console.log(el));

// console.log(res)


const newArray = myArray.map((el)=> el * 2)

console.log(newArray)
console.log(myArray)
