/** ЗАДАЧА 39 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */

const myCities = ['London', 'New York', 'Singapore']

/**
 *  возвращает строку
 * @param index
 * @param city
 * @returns {`${string} is at the index ${string} in the myCities array`}
 * @param {number} index
 * @param {string} city
 */
const cityInfo = ({index, city})=>
    `${city} is at the index ${index} in the myCities array`


 myCities.forEach((city, index)=>
     console.log(cityInfo({index, city})))
