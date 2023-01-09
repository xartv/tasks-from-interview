// слияние массивов
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 3, 6, 7];

// сложный путь
const merge = (a, b) => {
	let i = 0;
	let j  = 0;
	const result = [];

	while (i < a.lenght || j < b.length) {
		const firstItem = a[i];
		const secondItem = b[j];

		if(firstItem === undefined) {
			result.push(secondItem);
			j++;
			continue;
		}

		if(secondItem === undefined) {
			result.push(firstItem);
			i++;
			continue;
		}

		if(firstItem === secondItem) {
			result.push(firstItem, secondItem);
			j++;
			i++;
			continue;
		}

		if(firstItem < secondItem) {
			result.push(firstItem);
			i++;
		}

		if(firstItem > secondItem) {
			result.push(secondItem);
			j++;
		}
	}

	return result;
}

// простой путь
const merge2 = (a, b) => {
	return [...a, ...b].sort((a, b) => a - b);
}

console.log(merge(arr1, arr2));