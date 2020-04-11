
export default const Helpers = {
	transtionEnd: (node, done) => {
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
			done();
		});
	}
}
