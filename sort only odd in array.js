//106. __Задача Как отсортировать только нечетные числа в массиве, четные должны остаться на месте__
// Можно как я решил, а можно перенести все нечетные в отдельный массив, отсортировать, затем пробегаюсь по первоначальному массиву, беру только нечетные, аншифчу число из отсортированного массива и заменяю им итерируемое нечетное
const arr = [11, 5, 4, 61, 23, 66, 24, 10, 3, 7]
// [3, 5, 4, 7, 11, 66, 24, 10, 23, 61];

function sortOdd (arr) {
	const tempObj = {};
	const tempArr = [];
	arr.forEach((el, i) => {
		if (!(el % 2)) {
			tempObj[el] = i;
		} else {
			tempArr.push(el);
		}
	})
	tempArr.sort((a, b) => a - b);
	for(let [el, i] of Object.entries(tempObj)) {
		tempArr.splice(i, 0, el);
	}
	return tempArr;
}

sortOdd(arr).forEach(el => console.log(el));