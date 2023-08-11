/** ЗАДАЧА 29 - Строгий режим
 *
 * 1. Исправьте ошибку, которая возникает при включенном строгом режиме
 *
 * 2. Что будет, если отключить строгий режим?
 */

'use strict'

function myFunction() {
   // a = a || 2
  // console.log(a)

  const a = 2
  return a
}

// myFunction(25)
// myFunction()
// console.log(a)
console.log(myFunction())
