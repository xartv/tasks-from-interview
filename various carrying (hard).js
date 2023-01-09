function sum(a, b, c, d) {
	return a + b + c + d;
}

function mul(a, b, c, d) {
	return a * b * c * d;
}

function curry(fn) {
	return function curried(...args) {
		if (args.length >= fn.length) {
			return fn.apply(this, args);
		}

		return curried.bind(this, ...args);

		//return function test(...newArgs) {
		//	return curried.apply(this, [...args, ...newArgs]);
		//}
	}
}

const curriedSum = curry(sum);
const curriedMul = curry(mul);

console.log(curriedSum(2, 3, 6, 2));
console.log(curriedMul(2, 3, 6, 2));
console.log(curriedSum(2, 3)(6, 2));
console.log(curriedMul(2, 3)(6, 2));
console.log(curriedSum(2)(3)(6)(2));
console.log(curriedMul(2)(3)(6)(2));