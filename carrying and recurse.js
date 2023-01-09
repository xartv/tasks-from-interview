//46. sum(1)(2)(3)(4)() - каррирование с неограниченным кол-вом аргументов, прекращаем вызов пустыми (). Реализуется через рекурсию.

function sum(num) {
	let result = num;

	function f(s) {
		if(!s) {
			return result;
		}

		result += s;
		
		return f;
	}

	return f;
}

console.log(sum(1)(2)(3)(4)(5)());