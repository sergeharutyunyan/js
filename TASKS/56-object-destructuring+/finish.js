/** ЗАДАЧА 56 - Деструктуризация объектов
 *
 * 1. Измените функцию "personInfo" так, чтобы получить в консоли такой же вывод
 *
 * 2. Объект, возвращаемый функцией "personInfo", должен содержать только сокращенные имена свойств
 */

const personInfo = ({
                        name,
                        age: personAge,
                        createdAtYear = new Date().getFullYear(),
                        location: {country: origin, city: homeCity},
                        friendsQty = 0,
                    }) => {
    /*   const {
           name,
           age: personAge,
           createdAtYear = new Date().getFullYear(),
           location: {country: origin, city: homeCity},
           friendsQty = 0,
       } = person*/
    return {
        name,
        personAge,
        origin,
        homeCity,
        friendsQty,
        createdAtYear,
    }

}

const person = {
    name: 'Alice',
    age: 19,
    location: {
        country: 'England',
        city: 'London',
    },
}
console.log(personInfo(person))
/*const result = personInfo(person)

console.log(result)*/
/*
{
  name: "Alice",
  personAge: 19,
  origin: "England",
  homeCity: "London",
  friendsQty: 0,
  createdAtYear: *current year*
}
*/
