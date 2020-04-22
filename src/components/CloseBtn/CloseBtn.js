import React from 'react';
import './CloseBtn.scss';
import IconSvg from 'components/IconSvg';

const CloseBtn = ({clickHandler}) => {
	return (
		<div className="close-btn" onClick={clickHandler}>
			<IconSvg icon={'icon-close'} />
		</div>
	)
} 

export default CloseBtn;