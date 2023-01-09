// Вход - массив с числами, цена акции по дням. Нужно купить и продать, получив прибыль. Находим минимальное значение и максимальное. На выходе должны получить прибыль (разница)

let prices1 = [7, 1, 5, 3, 6, 4] // 5
let prices2 = [7, 6, 4, 3, 1] // 0
let prices3 = [10, 4, 2, 7, 3, 9, 4, 10] // 8

function bonus(prices) {
	let result = 0;
	let minPrice = prices[0];

	for(let price of prices) {
		if (price - minPrice > result) {
			result = price - minPrice;
		} else {
			minPrice =  Math.min(minPrice, price);
		}
	}

	return result;
}

// квадратичная сложность
//function bonus(prices) {
//	let result = 0;

//	for(let i = 0; i < prices.length; i++) {
//		for(let k = i; k < prices.length; k++) {
//			result = ((prices[k] - prices[i]) > result) ? prices[k] - prices[i] : result
//		}
//	}

//	return result;
//}

console.log(bonus(prices1));
console.log(bonus(prices2));
console.log(bonus(prices3));