import React, {useState, useEffect} from 'react';
import './MenuBtn.scss';
import IconSvg from 'components/IconSvg';

const MenuBtn = ({clickHandler}) => {
	return (
		<div className="menu-btn" onClick={clickHandler}>
			<IconSvg icon={'menu-btn-icon'} />
		</div>
	)
} 

export default MenuBtn;