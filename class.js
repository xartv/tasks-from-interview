//97__Задача. Переписать конструктор на ES6 синтаксис__
//function Bike(model, color) {
//	this.model = model;
//	this.color = color;
//}
//Bike.prototype.getDetails = function() {
//	return this.model + ' bike has' + this.color + ' color';
//};

class Bike {
	constructor(model, color) {
		this.model = model;
		this.color = color;
	}

	getDetails() {
		return this.model + ' bike has' + this.color + ' color'
	}
}

const inst = new Bike('мопед', 'зеленый');
console.log(inst.getDetails());