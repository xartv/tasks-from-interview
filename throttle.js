/**
 * Функция-обертка, служит для того, чтобы игнорировать запросы, которые происходят чаще, чем определенное кол-во времени. 
 * Первый запрос должен быть обязательно вызван, далее ставим задержку в течение 100мс и все последующие запросы будем игнорировать в период этой задержки
 * Самый последний запрос должен быть выполнен.
 */

function throttle(func, ms) {
	let isThrottled = false;
	let lastArgs;
	let lastThis;

	function wrapper(...args) {

		if (isThrottled) {
			lastArgs = args;
			lastThis = this;

			return;
		}
		

		func.apply(this, args);

		isThrottled = true;

		setTimeout(() => {
			isThrottled = false;

			if (lastArgs && lastThis) {
				func.apply(lastThis, lastArgs);
				lastArgs = lastThis = null;
			}
			
		}, ms);
	}

	return wrapper;
}

function saySmthng(text) {
	console.log(text);
}

const saySmthngThrottled = throttle(saySmthng, 300);

saySmthngThrottled(1);
saySmthngThrottled(2);
saySmthngThrottled(3);
saySmthngThrottled(4);
saySmthngThrottled(5);
