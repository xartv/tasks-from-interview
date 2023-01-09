// 99. __Задача Сделать первую букву строки заглавной__
const str1 = 'love';
const upper = (str) => {
	return `${str.slice(0, 1).toUpperCase()}${str.slice(1, str.length)}`;
}
console.log(upper(str1));
//второй вариант
const upper2 = (str) => {
	return str[0].toUpperCase() + str.slice(1, str.lenght); 
}
console.log(upper2('hello'));