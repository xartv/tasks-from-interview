// Принимаем массив массивов интервалов. Каждый массив интервала - это два числа, начало интервала, конец интервала. Необходимо смёрджить интервалы. 
/**
 * https://www.youtube.com/watch?v=2Od3MV1-mpk&list=PL0k-9Y7O1GwccXKHRzmvVj17yB7T9pjTo&index=1
 * 
 * Алгоритм
 * 1) Уточняем ограничения на поступающие данные
 * 2) Сортируем массивы по возрастанию по первому числу
 * 3) Создаем резалт, помещаем в него первый интервал
 * 4) Итерируемся дальше, проверяем, окончание нашего предыдущего интервала больше или равно началу следующего?
 * 5) В смердженный интервал мы берем начало предыдущего, а окончание берем максимальное окончание первого или второго
 * 6) Если интервал не пересекается, то пушим как есть интервал
 * 7) Сложность n*logn
 */

let input1 = [[1, 3], [2, 6], [8, 10], [15, 18]]; // [[1, 6], [8, 10], [15, 18]]
let input2 = [[1, 4], [4, 5]] // [[1,5]]
let input3 = [[11, 12], [2, 3], [5, 7], [1, 4], [8, 10], [6, 8]]

function merge(intervals) {
	if (intervals.length < 2) {
		return intervals;
	}

	intervals.sort((a, b) => a[0] - b[0]); // [ [ 1, 4 ], [ 2, 3 ], [ 5, 7 ], [ 6, 8 ], [ 8, 10 ], [ 11, 12 ] ]
	
	let result = [intervals[0]]; // [[ 1, 4 ]]

	for (let interval of intervals) {
		let recent = result[result.length - 1];

		if(recent[1] >= interval[0]) {
			 recent[1] = Math.max(recent[1], interval[1]);
		} else {
			result.push(interval)
		}
	}

	return result;
}

console.log(merge(input1));
console.log(merge(input2));
console.log(merge(input3));


