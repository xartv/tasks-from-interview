// Найти кол-во гласных в строке A, E, I, O, U

function findVowels(str) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	str = str.toLowerCase();
	return [...str].reduce((acc, el) => {
		return acc = vowels.includes(el) ? acc + 1 : acc;
	}, 0);
}

//решение через регулярки
function findVowels2(str) {
	let matches = str.match(/[aeiou]/gi);
	return matches ? matches.length : 0;
}

console.log(findVowels2('hello')); // 2
console.log(findVowels2('why')); // 0