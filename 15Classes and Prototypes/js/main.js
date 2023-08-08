/*
class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }
    upvote(){
        this.votesQty += 1
    }
    static margeComments (first, second){
        return`${first} ${second}`
    }
}

const firstComment = new Comment('First comment');

firstComment.upvote();
firstComment.upvote();
firstComment.upvote();
console.log(firstComment);
console.log(firstComment.text);

console.log(firstComment instanceof Comment);
console.log(firstComment instanceof Object);
console.log(firstComment.votesQty);
firstComment.upvote();
console.log(firstComment.votesQty);
firstComment.upvote();
console.log(firstComment.votesQty);

const secondComment =   Object.assign(firstComment);

console.log(secondComment);

secondComment.upvote();

console.log(secondComment.votesQty);
console.log(firstComment.votesQty);

// console.log(secondComment.prototype.constructor)

Object.keys(firstComment).forEach(key =>{
    console.log("-------"+ firstComment[key])
})


console.log(firstComment.hasOwnProperty('text'));
console.log(firstComment.hasOwnProperty('votesQty'));
console.log(firstComment.hasOwnProperty('upvote'));
console.log(firstComment.hasOwnProperty('hasOwnProperty'));

console.log(Comment.margeComments("First comment", "Second comment"));
*/

/*
class  Comment{
    constructor(text) {
        this.text = text
        this.voteQty = 0
    }
    upvote(){
        this.voteQty += 1
    }
    static mergeComments(first, second){
        return `${first} ${second}`
    }
}

console.dir(Comment);

console.log(Comment.mergeComments("Fist text", "Second text"));

const myComment = new Comment("Awesome Message 😀");


console.log(myComment.text);*/

/*
class NumbersArray extends Array {
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
}

const myArray = new NumbersArray(2, 4.7, 9)

console.log(myArray)
console.log(myArray.sum())

console.log(NumbersArray.prototype === myArray.__proto__);*/


const myName = "Serge";
console.log(myName);

console.log(myName.toUpperCase());

const mySecondName  = new String("Harutyunyan");
console.dir(mySecondName)
