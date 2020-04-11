import {useEffect, useRef, useState} from 'react';

const useScrollingElem = (value) => {
	const ref = useRef(value);

	const [isScrolling, setIsScrolling] = useState(false);

	useEffect(() => {
		const setScrollingType = (target) => {
			if (!target) return;
			
			if (target.clientHeight < target.scrollHeight) {
				setIsScrolling(true);
			} else {
				setIsScrolling(false);
			}
		}

		const resizeObserver = new ResizeObserver(entries => setScrollingType(ref.current));

		setScrollingType(ref.current);
		resizeObserver.observe(ref.current);
	}, []);
	
	return [ref, isScrolling];
}

export default useScrollingElem;