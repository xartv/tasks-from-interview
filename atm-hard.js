// Передаем лимиты купюр банкомата, если выдать не можем всю сумму, то не выдаем вообще ничего. Возвращаем объект {купюра: кол-во}


// Рекурсивное решение
let iWantToGet = (amountRequired, limits) => {
	
	function collect(amount, nominals) { // Создаем функцию для рекурсии, она будет принимать уменьшающееся значение необходимой к выдаче суммы и будет удалять закончившиеся номиналы
		if (amount === 0) return {};
		if (!nominals.length) return;

		let currentNominal = nominals[0]; //  Вытаскиваем значение текущего номинала
		let availableNotes = limits[currentNominal] // Вытаскиваем кол-во текущего номинала
		let notesNeeded = Math.floor(amount / currentNominal); // Узнаем, сколько банкнот текущего номинала нам нужно для выдачи текущей суммы
		let numberOfNotes = Math.min(availableNotes, notesNeeded) // Кол-во банкнот текущего номинала, которые мы будем выдавать

		for (let i = numberOfNotes; i >= 0; i--) { // закрываем кейсы, когда мы не можем выдать оставшимися купюроами требуемую сумму, например, если мы хотим получить 120, мы выдадим две сотки, а потом не сможем выдать 20, т.к. нет такого номинала
			let result = collect(amount - i * currentNominal, nominals.slice(1)) // рекурсивно вызываем функцию, уменьшаем необходимую к выдаче сумму

			if (result) {
				return i ? {[currentNominal]: i, ...result} : result; // передаем результат по цепочке вызовов, аккумулируя его в итоговом объекте
		}
		} 
		
	}

	let nominals = Object.keys(limits) // Выносим в отдельный массив номиналы, сортируем их
															.map(Number)
															.sort((a, b) => b - a); 

	return collect(amountRequired, nominals);
}

let limits = { 1000: 5, 500: 2, 100: 5, 50: 100, 30: 6 };

console.log(iWantToGet(230, limits)) // {30: 1, 100: 2}
console.log(iWantToGet(1000, limits)) // {1000: 1}
console.log(iWantToGet(200, limits)) // {100: 2}
console.log(iWantToGet(150, limits)) // {50: 1, 100: 1}
console.log(iWantToGet(120, limits)) // {30: 4}
console.log(iWantToGet(275, limits))
console.log(iWantToGet(50000, limits))