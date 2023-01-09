// отличие в том, что теперь мы можем купить и продать несколько раз. Например для prices1 мы покупаем по 1, продаем по 5, затем опять покупаем по 3, продаем по 6. Сложность линейная, по памяти константа.

let prices1 = [1, 4, 2, 5, 20, 9, 14] // 26
let prices2 = [7, 6, 4, 3, 1] // 0
let prices3 = [0, 7, 1, 5, 3, 6, 4]; // 14

function bonus(prices) {
	let result = 0;

	for(let i = 0; i < prices.length; i++) {
		if(prices[i] > prices[i-1]) {
			result += prices[i] - prices[i-1];
		}
	}

	return result;
}

// моя реализация, более сложная
//function bonus(prices) {
//	let result = 0;
//	let tempResult = 0;
//	let minPrice = prices[0];
//	let maxPrice = 0;

//	for(let price of prices) {
//		console.log(`Результат = ${result}, Временный результат = ${tempResult} minPrice = ${minPrice}, maxPrice = ${maxPrice}, price = ${price}`);
//		if (price - minPrice > 0 && price > maxPrice) {
//			tempResult = price - minPrice;
//			maxPrice = price;
//		} else if (price < maxPrice) {
//			result += tempResult;
//			tempResult = 0;
//			maxPrice = 0;
//			minPrice =  price;
//		} else {
//			minPrice = price;
//		}
//	}
//	result += tempResult;

//	return result;
//}

console.log(bonus(prices1));
console.log(bonus(prices2));
console.log(bonus(prices3));