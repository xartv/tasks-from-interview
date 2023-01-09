//45. sum(3)(4) - каррирование
function sum(a) {
	return (b) => {
		return a + b;
	}
}

console.log(sum(3)(4));