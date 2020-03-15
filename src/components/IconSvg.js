import React from 'react';
import Icons from 'images/symbols.svg';

const IconSvg = ({icon}) => {
	return (
		<svg className={`icon ${icon}`}>
	    	<use xlinkHref={`${Icons}#${icon}`} />
	  	</svg>
  	)
}

export default IconSvg;