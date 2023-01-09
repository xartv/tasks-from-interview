//73. Написать функцию сложения, которая умеет складывать два числа либо add(2, 5) либо так add(2)(5)
function add(a, b) {
	if (b !== undefined) {
		return a + b;
	} else {
		return (b) => a + b;
	}
}

console.log(add(2, 10));