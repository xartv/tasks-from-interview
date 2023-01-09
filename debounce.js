// Служит для того, чтобы прервать предыдущее действие и отложенно выполнить последующее. Т.е. в примере ниже будут отменены все дейсвтия и выполнится только fetching 5;

const fetchURL = function(url) {
	console.log(`fetching ${url}...`);
}

function debounce(callback, delay) {
	let timerId;

	return (...args) => {
		clearTimeout(timerId);
		timerId = setTimeout(() => {
			callback.apply(this, args);
		}, delay); 
	}
}

const fetching = debounce(fetchURL, 300);

fetching(1);
fetching(2);
fetching(3);
fetching(4);
fetching(5);