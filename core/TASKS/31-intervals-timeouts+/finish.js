/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */

/*const myInterval = setInterval(myTimer, 2000);

function myTimer() {
    for (let i = 1; i <= 5; i++) {
        console.log(`Сообщение номер ${i}`)
    }
}

function myStopFunction() {
    clearInterval(myInterval);
}*/

/*let i = 0;
setInterval(() => console.log(`Сообщение номер ${i++}`),2000)
setInterval(() => console.log(`Сообщение номер ${i++}`),2000)
setInterval(() => console.log(`Сообщение номер ${i++}`),2000)
setInterval(() => console.log(`Сообщение номер ${i++}`),2000)
setInterval(() => console.log(`Сообщение номер ${i++}`),2000)*/

let i = 1
let mySetInterval = setInterval(() => {
    console.log(`Сообщение номер ${i}`)
    i++
}, 2000)

console.log(mySetInterval)

setTimeout(()=> clearInterval(mySetInterval), 11000)

