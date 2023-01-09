//72. Написать функцию по возврату копии объекта
let obj3 = {a: 1, b: 2, c: 3}
// 1 вариант поверхностное копирование
function copyObj(obj) {
	return {...obj}
}
// 2 вариант глубокое копирование
function copyObj(obj) {
	return JSON.parse(JSON.stringify(obj))
}
//3 вариант в lodash есть функция глубокого копирования