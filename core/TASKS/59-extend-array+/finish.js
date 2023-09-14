/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

class ExtendedArray extends Array {
    sum() {
        return this.reduce((sum, num) => sum + num, 0)
    }
    onlyNumbers(){
        return this.filter((el)=>typeof el === 'number')
    }
}
const myExtendedArray = new ExtendedArray(4,5,6,7,8)
const myExtendedArray2 = new ExtendedArray(4,'sss5', NaN, undefined,6,7,8)

console.log(myExtendedArray)
console.log(myExtendedArray.sum())
console.log(myExtendedArray2)
console.log(myExtendedArray2.onlyNumbers())

myExtendedArray2.forEach((el)=>{
    console.log(el)
})


