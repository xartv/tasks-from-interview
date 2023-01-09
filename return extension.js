// 74. Задача Написать функцию, которая из строки возвращает расширение файла
const str = 'fegfkd.gkdf.gkdfjk.exe';

const findExt = (str) => {
	if(typeof str !== 'string') {
		throw new Error('Invalid type of parameter');
	} else if(!str.includes('.')) {
		throw new Error('Invalid filename (need dot)')
	} else {
		const parts = str.split('.');
		return parts[parts.length - 1]
	}
}

console.log(findExt(str));