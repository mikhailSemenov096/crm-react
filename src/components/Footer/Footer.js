import React, {useState, useEffect} from 'react';
import './Footer.scss';

import CurrentTime from 'components/CurrentTime';

const Footer = () => {
	return (
		<footer className='footer'>
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
					<a href='#' className='footer__offers-link'>Отзывы и предложения</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer;