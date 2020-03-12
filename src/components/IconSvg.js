import React from 'react';
import Icons from 'images/symbols.svg';

export const IconSvg = ({icon, viewBox}) => {
	return (
		<svg className={`icon ${icon}`}>
	    	<use xlinkHref={`${Icons}#${icon}`} />
	  	</svg>
  	)
}