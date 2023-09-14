/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */
let name = "Serge";
let surname = "Harutyunyan";
let profession = "developer";

let message = "Меня зовут " + name + " " +  surname + " и я " +  profession;
let message1 = `Меня зовут ${name} ${surname} и я ${profession}`;

console.log(message);
console.log(message1);
