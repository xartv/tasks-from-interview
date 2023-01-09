// 47. calculate(sum)(2)(3);
// 		 calculate(mul)(3)(2);
const sum = (a, b) => a + b
const mul = (a, b) => a * b;

function calculate(func) {
	return (a) => (b) => func(a, b);
}

console.log(calculate(sum)(2)(3));
console.log(calculate(mul)(3)(2));