 /** ЗАДАЧА 35 - Итерация по свойствам объекта
 *
 * 1. Переберите все собственные свойства объекта
 *
 * 2. Если имя свойства (ключ) равно "key1" или "key3",
 * выведите значение свойства в консоль.
 */

const myObject = {
  key1: true,
  key5: 10,
  key3: 'abc',
  key4: null,
  key10: NaN,
}


/*
 for (const key in myObject){
    if(key === myObject.key1){
        console.log(myObject.key1)
    }
 }
*/


 const res = Object.keys(myObject)

 // console.log(res)


 res.forEach((element)=>{
     if(element === 'key1' || element === 'key3'){
         console.log(myObject[element])
     }
 })
