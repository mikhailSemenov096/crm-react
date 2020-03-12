import React, { useState, useEffect } from 'react';
import './Sidebar.scss';
import classNames from 'classnames';
import { Navigation } from './Navigation';
import { CheckInput } from 'components/CheckInput/CheckInput';

const initialState = !localStorage.toggleChecked ? true : JSON.parse(localStorage.toggleChecked);

export const Sidebar = () => {
	const [checked, setChecked] = useState(initialState);

	useEffect(() => localStorage.setItem('toggleChecked', checked), [checked]);

	const sidebarClasses = classNames(
		'sidebar',
		'box-shadow',
		{'sidebar_mini': !checked}
	)

	return (
		<div className={sidebarClasses}>
			<div className='sidebar__toggle-nav'>
				<div className='sidebar__toggle-nav-input'>
					<CheckInput	
						type={'checkbox'}
						inputId={'toggle-sidebar'}
						inputName={'toggle-sidebar'}
						classes={'check-container-toggle'}
						checked={checked}
						onChange={() => setChecked(!checked)}
					/>

				</div>
			</div>
			<div className='sidebar__logo-wrap'></div>
			<div className='sidebar__company-user'></div>


			<Navigation/>
		</div>
	)	
}