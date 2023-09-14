/** ЗАДАЧА 26 - Что будет выведено в консоли
 *
 * Что будет выведено в консоли?
 * Ответьте на вопрос без запуска кода
 */

function fn() {
  console.log('Привет из функции fn')

  return function (a) {
   return function (b){
     console.log(a * b)
    }
  }
}

fn()(2)(4)

// Привет из функции fn
// true


