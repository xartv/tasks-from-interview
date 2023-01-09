/**
 * Напишите функцию get, принимающую последовательность ключей и по этой последовательности возвращающую значение в объекте произвольной вложенности
 * 
 * Пример 1: 
 * Input: 'red.big.apple', {red: {big: {apple: 'YEAH'}}}
 * Output: YEAH
 * 
 * Пример 2:
 * Input: 'red.fast.fancy.car', {red: {slow: 'something'}}
 */

const get = (keySequence, nestedObject) => {

	let arrayPath = keySequence.split('.');
	
	for(let i = 0; i < arrayPath.length; i++) {
		if(nestedObject[arrayPath[i]]) {
			nestedObject = nestedObject[arrayPath[i]]
		} else {
			return undefined;
		}
	}

	return nestedObject;
}

const get2 = (keySequence, nestedObject) => {
	
	return keySequence.split('.').reduce((nested, key) => nested && nested[key] , nestedObject)
}

console.log(get2('red.big.apple', {red: {big: {apple: 'FIN'}}}));
console.log(get2('red.fast.fancy.car', {red: {slow: 'something'}}));
