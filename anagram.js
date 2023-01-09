// Функция, проверяющая являются ли две строки анаграмами. Анаграма - это слово, содержащая те же самые буквы, просто в другом порядке. Регистр не имеет значения.

// суперпростое решение
function anagram(str1, str2) {
	if(str1.length !== str2.length) {
		return false;
	}

	return [...str1.toLowerCase()].sort().join('') === [...str2.toLowerCase()].sort().join('');
}

// мое решение
function anagram2(str1, str2) {
	if(str1.length !== str2.length) {
		return false;
	}

	const arr1 = [...str1.toLowerCase()];
	const arr2 = [...str2.toLowerCase()];

	const counter = arr1.reduce((acc, el) => {
		if(arr2.includes(el)) {
					arr2.splice(arr2.indexOf(el), 1);
					return ++acc;
				}
	}, 0);

	 return str1.length === counter;
}

// более сложное решение
function charCounter(str) {
	const charCounter = {}
	str = str.toLowerCase().replace(/[^\w]/g);
	for (let char of str) {
		charCounter[char] = charCounter[char] + 1 || 1;
	}
	return charCounter;
}

function anagram3(str1, str2) {
	if(str1.length !== str2.length) {
		return false;
	}

	const charCounter1 = charCounter(str1);
	const charCounter2 = charCounter(str2);

	for(let char in charCounter1) {
		if(charCounter1[char] !== charCounter2[char]) {
			return false;
		}
	}
	return true;

}

console.log(anagram('friend', 'Finder')); // true
console.log(anagram('hello', 'bye')) // false