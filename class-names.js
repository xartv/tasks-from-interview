// Отсортировать массив по часто используемым элементам, оставив только уникальные значение

let classNames = [
	'header', 'menu', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link', 'link'
]

function sort(arr) {
	const counterObj = {};

	arr.forEach(el => {
		counterObj[el] = counterObj[el] + 1 || 1;
	})

	return [...new Set(arr)].sort((a, b) => counterObj[b] - counterObj[a]);
}

console.log(sort(classNames)); // ['link', 'menu-item', 'menu', 'header', 'footer']

