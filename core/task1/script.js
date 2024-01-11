/*
function sumPairExists(a, b, v) {
    for (let i = 0; i < a.length; i++){
        for (let c = 0; c < b.length; c++ ){
            if(v === b[c] + a[i]){
                return true
            }
        }
    }
    return false;
}

// true ...որովհետեւ 10 + 12 = 22
console.log(sumPairExists([4, 2, 4, 60, 10, 9, 15], [67, 12, 0, 2, 1, 0], 22));
*/

/*
function sumPairExists(a, b, v) {

    return false;
}

// true ...որովհետեւ 10 + 12 = 22
console.log(sumPairExists([4, 2, 4, 60, 10, 9, 15], [67, 12, 0, 2, 1, 0], 22));
*/



/**
 * Task Description: Write a function that removes all even numbers from an array.
 * Expected Result: [1, 2, 3, 4, 5, 6] => [1, 3, 5]
 * Task Complexity: 2 of 5
 * Parameters: array - An array of integers
 */
/*

function removeEvenNumbers(array){
    // todo
}

const sampleArray = [1, 2, 3, 4, 5, 6];
console.log(removeEvenNumbers(sampleArray)) // [1, 3, 5]



function removeEvenNumbers(array) {
    // Create a new array to store odd numbers
    const resultArray = [];

    // Use a for loop to iterate over the elements of the input array
    for (let i = 0; i < array.length; i++) {
        // Check if the current element is not an even number
        if (array[i] % 2 !== 0) {
            // If it's not even, add it to the result array
            resultArray.push(array[i]);
        }
    }

    return resultArray;
}

const sampleArray = [1, 2, 3, 4, 5, 6];
console.log(removeEvenNumbers(sampleArray)); // Output: [1, 3, 5]
*/


/*
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        // The Fibonacci sequence is the sum of the two preceding ones
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

}

// Example usage:
const result = fibonacci(5);
console.log(result); // Output: 5
*/
