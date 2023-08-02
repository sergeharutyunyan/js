const userProfile = {
    name: "Bogdan",
    commentsQty: 23,
    hasSigneAgreement: false,
}

const {name, commentsQty} = userProfile;
const {hasSigneAgreement} = userProfile;

console.log(name);
console.log(commentsQty);
console.log(hasSigneAgreement);


const fruits = ['Apple', 'Banana'];

const [fruitOne, fruitTwo] = fruits;

console.log(fruitOne);
console.log(fruitTwo);



const userInfo = ({name, commentsQty})=>{
    if(!commentsQty){
        return `User ${name} has no comments`;
    }
    return `User ${name} has ${commentsQty} comments`;
}

console.log(userInfo(userProfile));

