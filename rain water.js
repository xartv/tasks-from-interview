// Вход - массив с картой высот, высота задана элементом массива, ширина 1. Нужно определить сколько воды наберется (в кубах), если на таком рельефе пройдет дождь. 
/**
 * Алгоритм. 
 * 1. На каждой итерации делим массив по этому итерируемому число, получается два массива, слева от него и справа от него
 * 2. В каждом из этих массивов находим максимальное число, это наши барьеры, внутри которых может накапливаться вода
 * 3. Находим минимальное число из двух максимальных чисел, найденных в п2. Это непосредственно уровень воды, который может быть накоплен.
 * 4. Если число из п3 больше, чем текущий итерируемый объект, значит вода может быть накоплена и к результату аккумулируем разницу между минимальным барьером из п3 и текущим итерируемым числом
 * 
 * Алгоритм 2. 
 * 1) Создаем два указателя maxLeft и maxRight, задаем им значения начала и конца массива соответственно
 * 2) Ищем минимальное значение из этих двух указателей и вычисляем разницу между этим минимальным значением и текущим итерируемым числом. Если получается отрицательное число или 0, то мы ничего не пишем в резалт. Если положительное, значит вода накопилась и мы аккумулируем в резалт получившуюся разницу
 * 3) После всех операци двигаем меньший указатель вперед или назад (в зависимости от указателя). Если они равны, то двигаем любой, главное заранее об этом договориться
 */

const input1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] // 6
const input2 = [4, 2, 0, 3, 2, 5] // 9
const input3 = [4, 2, 4, 3, 1, 2, 1] // 3

// Algorythm 1 (mine)
const rainwaterCounter = (arr) => {
	let result = 0;
	let leftMax;
	let rightMax;
	let minBar;
	
	for (let i = 0; i < arr.length; i++) {
		let item = arr[i];
		
		leftMax = Math.max(...arr.slice(0, i));
		rightMax = Math.max(...arr.slice(i+1, arr.length));
		minBar = Math.min(leftMax, rightMax);

		if(minBar > item) {
			result += minBar - item;
		}
		
	}
	
	return result;
}

// Algorythm 2
//const rainwaterCounter = (arr) => {
//	let maxLeft = arr[0];
//	let maxRight = arr[arr.length - 1];

//	let left = 1;
//	let right = arr.length - 2; // пропускаем крайние элементы, там не может накапливаться вода
//	let total = 0;

//	while(left <= right) {
//		if (maxLeft <= maxRight) {
//			if (maxLeft - arr[left] > 0) {
//				total += maxLeft - arr[left];
//			}
//			maxLeft = Math.max(maxLeft, arr[left]);
//			left += 1;
//		} else {
//			if (maxRight - arr[right] > 0) {
//				total += maxRight - arr[right];
//			}
//			maxRight = Math.max(maxRight, arr[right]);
//			right -= 1;
//		}
//	}

//	return total;
//}

console.log(rainwaterCounter(input1));
console.log(rainwaterCounter(input2));
console.log(rainwaterCounter(input3));