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


 const myName = 'Serge'
 const mySurName = 'Harutyunyan'
 const myProfetion = 'UI Developer'

const personInfo = 'Меня зовут ' + myName + ' ' + mySurName + ' и я ' + myProfetion

console.log(personInfo)

 const personInfo1 = `Меня зовут ${myName} ${mySurName} и я ${myProfetion}`

 console.log(personInfo1)
