// Дан массив чисел, необходимо найти два числа, которые в сумме дадут нужное нам число

// решение в лоб
const sumOfTwo = (arr, target) => {
	const result = [];

	arr.forEach(el => {
		const secondEl = target - el;
		if (arr.includes(secondEl)) {
			result.push([el, secondEl]);
		}
	})

	return result;
}

//второе решение через объект и возвращаем индекс элемента
const sumOfTwo2 = (arr, target) => {
	const numObj = {};

	arr.forEach((el, i) => {
		numObj[el] = i;
	})

	for(let i = 0; i < arr.length; i++) {
		const diff = target - arr[i];

		if(numObj[diff] && i !== numObj[diff]) {
			return [i, numObj[diff]]
		}
	}

	return [];
}


console.log(sumOfTwo2( [2, 7, 11, 15], 18 ));