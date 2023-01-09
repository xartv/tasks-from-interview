//43. __Задача. Получаем на вход массив строк ['banana', 'grapefruit', 'banana', 'grapefruit', 'banana', 'orange', 'banana']. Нужно вернуть массив только уникальных значений и отсортировать их так, чтобы вначале были строки, которые чаще всего встречались в первоначальном массиве. 

let words = ['orange', 'banana', 'grapefruit', 'banana', 'grapefruit', 'banana', 'orange', 'orange', 'orange', 'orange', 'banana'];

// ниже мое решение
//const mySort = (arr) => {
//	const temp = arr.reduce((acc, cur) => {
//		acc[cur] = (acc[cur] || 0) + 1;
//		return acc;
//	} , {});
	
//	let tempArr = [];

//	for(let [key, value] of Object.entries(temp)) {
//		tempArr.push(`${value}${key}`)
//	}
	
//	let result = []

//	tempArr.sort((a, b) => parseInt(b) - parseInt(a)).forEach(item => {
//		result.push(item.slice(1, item.length))
//	})
//	return result;
//}

//console.log(mySort(words));

let words1 = ['banana', 'orange', 'grapefruit', 'banana', 'grapefruit', 'banana', 'banana', 'grapefruit', 'grapefruit', 'grapefruit', 'grapefruit'];

//норм решение
const mySort = (arr) => {
	const temp = arr.reduce((acc, cur) => {
		acc[cur] = (acc[cur] || 0) + 1;
		return acc;
	} , {});

	let tempArr = Object.keys(temp);

	return tempArr.sort((a, b) => temp[b] - temp[a]);
}

console.log(mySort(words1));