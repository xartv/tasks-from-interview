// Пишем функцию, в которую передаем сумму денег, которую хотим получить.
// Можно уточнить, что делать, если пользователь вводит ту сумму, которую мы не можем выдать без сдачи
/**
 * Допущения
 * 1) Нужно выдать наименьшее кол-во банкнот, которое возможно
 * 2) Предполагаем, что мы всегда можем выдать запрашиваемую сумму
 * 3) Баланс клиента бесконечен
 * 4) Кол-во банкнот бесконечно
 * 5) Доступные банкноты 100, 50, 20, 10
 */

//собираю купюры в объект с каунтером
function iWantToGet(amountRequired) {
	if (!amountRequired || amountRequired < 0) return null

	const notes = [100, 50, 20, 10];
	let result = {}

	for(let i = 0; i < notes.length; i++) {
		let note = notes[i];

		if (!(amountRequired % note)) {
			result[note] = amountRequired / note;
			return result;
		}

		if (amountRequired >= note) {
			result[note] = Math.floor(amountRequired / note);
			amountRequired = amountRequired % note;
		}
	}

	return result;
}

// собираю в массив более простым способом
function iWantToGet2(amountRequired) {
	if (!amountRequired || amountRequired < 0) return null

	const notes = [100, 50, 20, 10];
	let result = [];

	for(let i = 0; i < notes.length; i++) {
		let note = notes[i];

		while (amountRequired - note >= 0) {
			result.push(note);
			amountRequired -= note;
		}
	}

	return result;
}

console.log(iWantToGet2(160));