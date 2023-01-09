// Необходимо проверить, является ли какое-то число простым.
function isPrime(num) {
	for(let i = 2; i < num; i++) { // можно не идти до num, можно идти до корень квадратный из num (Math.sqrt(num))
		if(num % i === 0) {
			return false;
		}
	}

	return num > 1; // простое число должно быть больше единицы
}

// Необходимо вернуть все простые чилса (решение через цикл)
function getPrimes(num) {
	const result = [];

	for(let i = 2; i < num; i++) { 
		if(isPrime(i)) {
			result.push(i);
		}
	}

	return result;
}

// Алгоритм - Решето эратосфена. Отсеиваем те числа, которые будут кратны найденным простым числам. Отсеянные числа храним в отдельном массиве. Сложность O(loglogn)
function getPrimesErath(num) {
	const seive = [];
	const primes = []

	for(let i = 2; i <= num; i++) {
		if (!seive[i]) { // проверяем есть ли под индексом нашего числа в массиве отсеянных чисел true 
			primes.push(i);
			for(let j = i * 2; j <= num; j += i) { // итерируемся второй раз (можно итерироваться начиная с j = i^2)
				seive[j] = true; // пишем в массив отсеянных все числа, кратные i
			}
		}
	}

	return primes;
}