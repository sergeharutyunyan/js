/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

function firstFunction(a, b) {
  return a + b
}

const secondFunction = function (a, b) {
  return a + b
}
console.log(firstFunction(2,4));
console.log(secondFunction(  2,4));