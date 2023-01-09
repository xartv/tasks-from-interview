// Пройтись по древовидной структуре и собрать все values

const tree = {
	value: 1,
	children: [
		{
			value: 2,
			children: [
				{value: 3},
			]
		},
		{
			value: 4,
			children: [
				{value: 5},
				{value: 6}
			]
		}
	]
};

// рекурсивный вариант (ресурсоемко)
function getTreeValues(tree) {
	let result = [];

	function recurse(tree) {
		if (tree.value) {
			result.push(tree.value);
		}
	
		if(Array.isArray(tree.children)) {
			tree.children.forEach(el => {
				recurse(el)
			});
		}
	}

	recurse(tree);

	return result;
}

// вариант через стэк
function getTreeValues2(tree) {
	const stack = [tree];
	const result = [];

	while(stack.length > 0) {
		const node = stack.pop();

		if(node.value !== undefined) {
			result.push(node.value);
		}

		if(node.children?.length) {
			stack.push(...node.children)
		}

	}

	return result;
}

console.log(getTreeValues2(tree)); // [1, 2, 3, 4, 5, 6]