// Каждое последующее число является суммой двух предыдущих  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

//решение через цикл O(n), вычисляем всю последовательность и сохраняем в массив все вычисленные значения
function fibonacсi(n) {
	const result = [0, 1];

	for (let i = 2; i <= n; i++) {
		result.push(result[i-1] + result[i-2]);
	}

	return result[n];
}

// короткое решение, не сохраняем никакой массив, просто суммируем последовательно значения передавая из по цепочке из двух переменных
function fibonacсiShort(n) {
	let a = 1;
	let b = 1;

	for (let i = 3; i <= n; i++) {
		[a, b] = [b, a + b]
	}

	return b
}

// решение через рекурсию, но любая рекурсия - это затраты на вычисления, лучше стараться находить решение без нее
function fibonacciRecurs(n) {
	if (n < 2) {
		return n;
	}

	return fibonacciRecurs(n - 1) + fibonacciRecurs(n - 2);
}

console.log(fibonacсi(10));
console.log(fibonacсiShort(10));
console.log(fibonacciRecurs(10));