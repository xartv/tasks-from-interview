// 1 - стена, 0 - путь. Задаем конечную и начальную точку в аргументы. Венуть правду, если путь есть.

/**
 * Алгоритм
 * 1) Каждый элемент, который мы пройдем, будем менять на 5, чтобы пометить его, как пройденный.
 * 2) Создадим вспомогательную функцию, которая будет возвращать массив объектов, с возможными координатами, на которые мы можем пойти. В эту функцию передаем текущее положение
 * 3) Далее проверяем вернувшийся массив объектов на длину, если в нем есть элементы, то идем в цикл, проходимся по ним и проверяем не решает ли он лабиринт и не является ли уже ранее помеченным
 * 4) Если не решает и не является помеченным, то для этого элемента рекурсивно вызваем родительскую функцию пока не вернем тру. Если проходка ничего не возвращает, то по итогу из родительской функции мы возвращаем фолс
 */

let maze = [
	[1, 1, 1, 0, 0, 1],
	[1, 1, 1, 1, 0, 1],
	[0, 0, 0, 0, 0, 0],
	[0, 1, 1, 1, 1, 1],
	[0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 0],
]

function checkPath(start, end) {
	maze[start.y][start.x] = 5;

	let siblings = getValidSib(start);

	if(siblings.length > 0) {
		for(let i = 0; i < siblings.length; i++) {
			let current = siblings[i];

			let isSolved = current.x === end.x && current.y === end.y;
			let notVisited = maze[current.y][current.x] !== 5;

			if (isSolved || (notVisited && checkPath(current, end))) {
				return true;
			}
		}
	}

	return false;
}

function getValidSib(cord) {
	let {x, y} = cord;

	let cords = [];

	if(maze[y-1] !== undefined) { // проверяем, есть ли сверху нашей позиции ряд, на который мы можем ходить. Будем так же проверять и другие направления
		cords.push({x: x, y: y-1, val: maze[y-1][x]});
	}

	if(maze[y+1] !== undefined) {
		cords.push({x: x, y: y+1, val: maze[y+1][x]});
	}

	if(maze[y][x+1] !== undefined) {
		cords.push({x: x+1, y: y, val: maze[y][x+1]});
	}

	if(maze[y][x-1] !== undefined) {
		cords.push({x: x-1, y: y, val: maze[y][x-1]});
	}

	return cords.filter(el => el.val === 0);
}

console.log(checkPath({x: 3, y: 0}, {x: 5, y: 5}));

