/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение),
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */
const cars =[
    {
        carBrand : "Bmw",
        price : 2000,
        isAvailableForSale : true,
    },  {
        carBrand : "Mers",
        price : 4000,
        isAvailableForSale : false,
    },  {
        carBrand: "Lexus",
        price: 6000,
        isAvailableForSale: true,
    },
]
cars.push({
    carBrand: "Toyota",
    price: 1000,
    isAvailableForSale: true,
})
const newCar ={
    carBrand: "Tesla",
    price: 10000,
    isAvailableForSale: false,
}
cars.push(newCar)

console.log(cars)
console.log(cars[2])
console.log(cars[2].carBrand)
