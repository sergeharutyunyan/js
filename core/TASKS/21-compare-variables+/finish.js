/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */
/**
 *Compare two numbers
 * @param {number} num1
 * @param {number} num2
 * @returns {boolean}
 */
const compareNumbers = (num1, num2) => {
    num1 = ~~num1;
    num2 = ~~num2;
    console.log(typeof num1);
    console.log(typeof num2);
    return num1 <= num2
}

let myVariable1 = 10
let myVariable2 = '5'
console.log(compareNumbers(myVariable1, myVariable2))
// Напишите код здесь
~~myVariable1 <= ~~myVariable2 ? console.log(true) : console.log(false)
console.log(compareNumbers(myVariable1, myVariable2))
console.log('---------------------')
console.log(`${parseInt(myVariable1) <= parseInt(myVariable2)}  " dd"`)
console.log('---------------------')
myVariable1 = '20'
myVariable2 = 100

// Напишите код здесь

~~myVariable1 <= ~~myVariable2 ? console.log(true) : console.log(false)


console.log(compareNumbers(myVariable1, myVariable2))


console.log(parseInt(true))
