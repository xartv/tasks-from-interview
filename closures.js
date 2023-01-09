//38. замыкания (closures)
function sayHelloTo(name) {
	const message = 'Hello ' + name

	return function() {
		console.log(message)
	}
}

const helloToElena = sayHelloTo('Elena')
const helloToIgor = sayHelloTo('Igor')
console.log(helloToElena)
helloToElena()
helloToIgor()