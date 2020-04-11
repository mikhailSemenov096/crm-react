export const transitionEnd = (node, done) => {
	const transitionEndElem = () => {
		return new Promise((resolve, reject)=> {
			node.addEventListener('transitionend', (event) => {
				if (event.target !== event.currentTarget) return false;
				resolve();
			});
		})
	}

	transitionEndElem().then(data => {
		node.removeEventListener('transitionend', transitionEndElem);
		if (done) done();
	});
}

export const animate = ({ duration, timing, draw, cancel }) => {
	let startTime = performance.now();
	let requestID = null;

	requestAnimationFrame(function animate(currentTime) {
		// timeFraction изменяется от 0 до 1
		let timeFraction = (currentTime - startTime) / duration;

		if (timeFraction > 1) timeFraction = 1;
		if (timeFraction < 0) timeFraction = 0;

	    // вычисление текущего состояния анимации
		let progress = timing(timeFraction);

		draw(progress); // отрисовать её

		if (timeFraction < 1) {
			requestID = requestAnimationFrame(animate);
		} else {
			cancelAnimationFrame(requestID);
		}

		if (cancel) cancelAnimationFrame(requestID);
	});
}
