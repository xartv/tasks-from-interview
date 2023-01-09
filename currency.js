// Есть массив транзаций [валюта, операция, сумма]. Нужно получить объект {валюта: [сумма покупок, сумма продаж]}

const input = [
	['usd', 'buy', 10000],
	['usd', 'sell', 5000],
	['gbp', 'buy', 9000],
	['eur', 'sell', 7000],
	['uah', 'buy', 10000],
	['usd', 'sell', 25000],
]

// my solve
function currencyCalc(transactions) {
	return transactions.reduce((acc, tr) => {
		const [cur, type, value] = tr;

		acc[cur] = acc[cur] || [0, 0];
		acc[cur][type === 'buy' ? 0 : 1] += value;

		//switch (type) {
		//	case 'buy': 
		//		acc[cur][0] += value;
		//		break;
		//	case 'sell': 
		//		acc[cur][1] += value
		//		break;
		//	default:
		//		throw new Error('Wrong operation');
		//}
		
		return acc; 
	}, {})
}

console.log(currencyCalc(input));


/**
 	const output = {
		usd: [10000, 30000],
		gbp: [9000, 0],
		eur: [0, 7000],
		uah: [10000, 0],
	}
*/
