// let a;
// console.log(a)
// a = "kuku";
// console.log(a)
// console.log(console.log(10))

// const myName = "Serge";

// myName = "";

// console.log(myName);
// typeof myName;

// type 6 primitive 1 link
/*
const objectA = {
    a: 10,
    b: true
}

const copyOfA = objectA;
console.log(objectA)
console.log(copyOfA)

copyOfA.a = 25;

console.log(objectA)
console.log(copyOfA)

copyOfA.c = "Serge";

console.log(objectA)
console.log(copyOfA)*/

/*
function a (){
    console.log("Hello")
}
a();
a = 10;
a();
*/
/*

const a = () => {
    console.log("Hello ")
}
a();
a = 10;
a();
*/

// object

const myCity = {
    popular : true,
    country : "USA",
    city : "New York",
}
console.log(myCity)
console.log(myCity.city)

const myCity2 = {
    city: "New York"
}
myCity2.populyar = true;
console.log(myCity2);
myCity2.country ="Usa";
console.log(myCity2)
delete myCity2.populyar;
console.log(myCity2);
myCity2['populyar'] = false;
console.log(myCity2)
const countryPropertyName = "year";
myCity2[countryPropertyName] = 1995;
const myFunction = () => {
    return "kuku"
}
myCity2[myFunction()] = "Piso";
console.log(myCity2);

const myCity3 = {
    city: "New york",
    info :{
        isPopular : true,
        country : "USA",
        3: 15,
        barev: 15,
    }
}
console.log(myCity3.info.country)

delete myCity3.info.isPopular;
delete myCity3.info["country"];
delete myCity3.info[3];
delete myCity3.info['barev'];
console.log(myCity3)