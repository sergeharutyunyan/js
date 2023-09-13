/** ЗАДАЧА 69 - Деструктуризация объектов
 *
 * Создайте функцию "mult", в которой будут умножаться
 * значения свойств x, y, z переданного объекта
 *
 * Результат умножения верните из функции
 */

const objectWithNumbers = {
    x: 5,
    y: 20,
    z: 3,
    c: 3,
    v: 3,
}

// Создайте функцию здесь

/*
const mult = (nums) => {
    const {x, y, z} = nums
    return x * y * z
}
*/

const mult = ({x,y,z}) => x * y * z



const result = mult(objectWithNumbers)
console.log(result)
// 300
