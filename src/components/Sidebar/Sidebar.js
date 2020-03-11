import React from 'react';
import './Sidebar.scss';
import {Navigation} from './navigation/Navigation';

export const Sidebar = () => {
	return (
		<div className={`sidebar box-shadow`}>
			<div className='sidebar__toggle-nav'></div>
			<div className='sidebar__logo-wrap'></div>
			<div className='sidebar__company-user'></div>
			<Navigation/>
		</div>
	)	
}