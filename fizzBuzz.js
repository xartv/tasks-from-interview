// Нужно написать функцию, которая принимает число и нужно вывести в консоль все числа, начиная от 1 до n, но если число делится на 3, то возвращаем fizz, если делится на 5, то возвращаем buzz, если делится и на 3 и на 5, то возвращаем fizzBuzz

function fizzBuzz(n) {
	for(let i = 1; i <= n; i++) {
		if(i % 3 === 0 && i % 5 === 0) {
			console.log('FizzBuzz');
		} else if (i % 3 === 0) {
			console.log('Fizz');
		} else if (i % 5 === 0) {
			console.log('Buzz')
		} else {
			console.log(i);
		}
	}
}

fizzBuzz(15);