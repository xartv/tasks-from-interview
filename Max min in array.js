//102. __Задача Найти макс и мин значение в массиве__
const testArr = [3, 1, 6, -1, 8, 4, 5, 3];
function maxMin(arr) {
	return [Math.min(...arr), Math.max(...arr)];
}
console.log(maxMin(testArr));
