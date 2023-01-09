const input1 = [1, 2, 2, 1];
const input2 = [2, 2];
// Output: [2, 2]

const input3 = [4, 9, 5];
const input4 = [9, 4, 9, 8, 4];
// Output [4, 9] or [9, 4]

// мое решение
//const intersect = (arr1, arr2) => {
//	const result = [];

//	arr1.forEach((item, i) => {
//		if(arr2.includes(item)) {
//			arr2.splice(arr2.indexOf(item), 1);
//			result.push(item);
//		}
//	})

//	return result;
//}

// решение через cacheMap
const intersect = (arr1, arr2) => {
	const result = [];
	let cacheMap = {};

	//arr1.forEach(item => {
	//	cacheMap[item] = cacheMap[item] + 1 || 1;
	//})

	//use reduce
	cacheMap = arr1.reduce((acc, i) => {
		acc[i] = acc[i] ? acc[i] + 1 : 1;
		return acc;
	}, {})
	
	arr2.forEach(item => {
		if(cacheMap[item] && cacheMap[item] > 0) {
			result.push(item);
			cacheMap[item] -= 1;
		} 
	})

	return result;
}

console.log(intersect(input1, input2));
console.log(intersect(input3, input4));

// 84. Пересечение массивов (игнорируем совпадения)
const first = [1, 2, 3, 4];
const second = [3, 4, 5, 6];
function intersection(a, b) {
	const resultArr = [];
	a.forEach(el => {
		if (b.includes(el)) {
			resultArr.push(el);
		}
	})
	return resultArr;
}
console.log(intersection(first, second));

// Пересечение массивов, считаем кол-во вхождений
const first1 = [1, 2, 3, 4];
const second2 = [3, 4, 5, 4, 5, 5, 6];
function intersectCounter(a, b) {
	const resultObj = {};
	a.forEach(el => {
		for(let item of b) {
			if(item == el) {
				resultObj[el] = (resultObj[el] || 0) + 1;
			}
		}
	})
	return resultObj;
}
console.log(intersectCounter(first1, second2));