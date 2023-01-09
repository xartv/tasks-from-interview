// функция bind для приклеивания аргумента
function f1(a, b) {
	console.log(a, b)
}

let f2 = f1.bind(null, 'foo'); // мы биндим первый аргумент как foo

f2('bar', 'baz'); // выведет foo bar, второго аргумента уже по сути нет в функции f2