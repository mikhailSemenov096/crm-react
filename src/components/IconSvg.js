import React from 'react';
import Icons from "../images/symbols.svg";

const url = './images/symbols.svg';

export const IconSvg = (props) => (
	<svg className={`icon ${props.icon}`}>
    	<use xlinkHref={`${Icons}#${props.icon}`} />
  	</svg>
)