/** ЗАДАЧА 14 - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Убедитесь что значение этой переменной НЕ является экземпляром String
 * Используйте для этого оператор "instanceof"
 *
 * 3. Убедитесь что значение этой переменной имеет тип "string"
 *
 * 4. Создайте другую переменную и ее значением должно быть значение
 * первой переменной заглавными буквами
 *
 * 5. Выведите в консоль значение второй переменной
 */


const myStr = "Hello world"
const myStrRes = myStr instanceof String
console.log(myStrRes)

console.log(typeof myStr ? `${myStr} true` :  `${myStr} false`)

const myStr1 = myStr.toUpperCase();

console.log(myStr1 )

//
const myString = new String('Serge');
console.log(myString instanceof String)
console.log(typeof myString)
console.log(myString.toUpperCase());
