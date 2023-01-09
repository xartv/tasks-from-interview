// есть функция, которая принимает коллбэк, нужно переписать ее на функцию, которая будет возвращаться промис

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));

  document.head.append(script);
}

//жестко привязываем промисификацию к loadScript
function promisifyLoadScript(src) {
	return new Promise((resolve, reject) => {
		loadScript(src, (err, script) => {
			if(err) {
				reject(err);
			}
			resolve(script);
		})
	})
}
promisifyLoadScript('src').then() // использование

//создадим обертку для любых функций
function promisify(fn) {
	return (...args) => new Promise((resolve, reject) => {
		function cb(err, result) { // создаем коллбэк
			if(err) {
				reject(err);
			}
			resolve(result);
		}
		
		args.push(cb); // добавляем созданный коллбэк в аргументы в конец, т.к. мы решили, что коллбэк в них должен идти последним

		fn.apply(this, args); // вызываем оригинальную функцию со всеми аргументами, включая созданный коллбэк
	})
}
let promisifyTest = promisify(loadScript); // создаем промисифицирующую обертку вокруг оригинальной функции 
promisifyTest(); // вызываем промисифицированную функцию

//создадим обертку для любых функций, которые могут принимать коллбэк с любым кол-вом аргументов
function promisifyBetter(fn, manyArgs = false) { // если передаем вторым аргументом true, то включаем режим, при котором передаваться будет массив результатов
	return (...args) => new Promise((resolve, reject) => {
		function cb(err, ...results) {
			if(err) {
				reject(err);
			}

			resolve(manyArgs ? results : results[0]);
		}

		args.push(cb);

		fn.apply(this, args)
	})
}