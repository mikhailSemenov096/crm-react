import React from 'react';
import './Avatar.scss';
import Ava from 'images/ava.svg';

const Avatar = ({url, mixClass}) => 
	(
		<div className={`${mixClass} ava`}>
			<img src={url} alt='Аватар' className='ava__img'/>
		</div>
	)

Avatar.defaultProps = {
	url: Ava,
	mixClass: ''
}

export default Avatar;