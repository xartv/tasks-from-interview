// Что выведется в консоль (ответ undefined) Правило: контекст берется слева от точки, т.е. obj.say - контекст для метода say - это obj. 
const obj = {
	a: 42,
	say: function () {
		setTimeout( function () {
			console.log(this.a);
		}, 1000)
	}
}

obj.say();
//поправим, перепишем на стрелочную функцию
const obj1 = {
	a: 42,
	say: function () {
		setTimeout( () => {
			console.log(this.a);
		}, 1000)
	}
}

obj1.say();
// вариант исправления еще один через bind
const obj2 = {
	a: 42,
	say: function () {
		function helper() {
			console.log(this.a)
		}
		setTimeout( helper.bind(this), 1000)
	}
}

obj2.say();