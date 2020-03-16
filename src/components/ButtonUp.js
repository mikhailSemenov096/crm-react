import React, {useState, useEffect} from 'react';
import { CSSTransition } from 'react-transition-group';
import IconSvg from 'components/IconSvg';

const ButtonUp = ({ mixClass, currentY }) => {
	const [toTop, setToTop] = useState(false);

	useEffect(() => {
		const changeScroll = () => {
			if (window.pageYOffset > currentY) {
				setToTop(true);
			} else {
				setToTop(false);
			}
		}

		document.addEventListener('scroll', changeScroll);
		
		return () => document.removeEventListener('scroll', changeScroll);

	}, [currentY]);

	const scrollToTopHandler = event => {
		event.preventDefault();

		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	return (
		<CSSTransition
			in={toTop}
			timeout={300}
			mountOnEnter
			unmountOnExit
		>
			<button 
				className="button-up"
				onClick={scrollToTopHandler}
			>
				<IconSvg icon={'arrow-up'} />
			</button>
		</CSSTransition>
	)
}

ButtonUp.defaultProps = {
	mixClass: '',
	currentY: 100
}

export default ButtonUp;