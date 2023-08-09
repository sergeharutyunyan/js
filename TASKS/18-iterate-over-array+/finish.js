/** ЗАДАЧА 18 - Перебор элементов массива
 *
 * 1. Создайте массив с несколькими элементами
 *
 * 2. Используя один из методов массивов, переберите все элементы
 * и выведите каждый элемент в консоль
 */


const myArray = ['abc', null, 5, 20, 'aaa']


myArray.forEach((element) => console.log(element));

myArray.map((element, index) => console.log(index))

