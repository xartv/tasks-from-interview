//120. __Задача про выборку из url-строки подстрок и создание на этой основе объекта__
const inData = 'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue&experiments.theme=dark';
function queryObectify(str) {
	let res = {};
	str = str.split('&').map(el => {
		return el.split('.')
	})

	for (let i = 0; i < str.length; i++) {
		let cur = res;
		for (let key = 0; key < str[i].length; key++) {
			let name = str[i][key];
			if(key == str[i].length - 1) {
				name = name.split('=');
				cur[name[0]] = decodeURIComponent(name[1]);
				break;
			}
			if(cur[name]) {
				cur = cur[name];
			} else {
				cur[name] = {};
				cur = cur[name];
			}
		}
	}
	return res;
}

console.log(queryObectify(inData));

/**
 {
	user: {
		name: {
			firstname: Bob,
			lastname: Smith,
		},
		favoritecolor: Light Blue,
	},
	experiments: {
		theme: 'dark'
	}
 }
 */