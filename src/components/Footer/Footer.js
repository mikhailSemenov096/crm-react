import React from 'react';
import { useSelector } from 'react-redux';

import classNames from 'classnames';
import './Footer.scss';

import CurrentTime from 'components/CurrentTime';

const Footer = () => {
	const sidebarState = useSelector(state => state.sidebarReducer);

	const footerClasses = classNames(
		'footer',
		{'footer_mini': !sidebarState.sidebarType}
	)

	return (
		<footer className={footerClasses}>
			<div className='footer__info'>
				<div className='footer__dev-info-descr'>
					<CurrentTime 
						time={false}
						date={false}
						year={true}
					/> © БЛОКНОТ24
				</div>

				<div className='footer__dev-info-phone'>
					<a href='tel:8 800 222-53-80'>8 (800) 222-53-80</a>
				</div>

				<div className='footer__dev-info-site'>
					<a href='https://bloknot24.ru'>bloknot24.ru</a>
				</div>

				<div className='footer__offers'>
					<a href='#dd' className='footer__offers-link'>Отзывы и предложения</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer;