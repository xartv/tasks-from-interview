// 75. Задача на вложенность
const root = document.querySelector('#root');

const domDepth = (element, currentLevel) => {
	if (element.children.lenght === 0) return currentLevel;
	currentLevel += 1;
	let maxDepth = currentLevel;
	Array.from(element.children).forEach(el => {
		maxDepth = Math.max(domDepth(el, currentLevel), maxDepth);
	})
	return maxDepth;
}

console.log(domDepth(root, 0));