// Создать функцию inc, которая при первом вызове вернет 1, при втором 2 и так далее, при этом нельзя создавать более одной переменной в глобальном скоупе. Решаем через замыкание и IIFE
const inc = (function () {
	let counter = 0;
	return function() {
		console.log(++counter);
	}
})()

inc(); // 1
inc(); // 2