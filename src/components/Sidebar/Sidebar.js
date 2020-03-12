import React from 'react';
import './Sidebar.scss';
import { Navigation } from './Navigation';
import { CheckInput } from 'components/CheckInput/CheckInput';

export const Sidebar = () => {
	const changeHandler = (event) => {
		console.log(event.target.checked)
	}
	return (
		<div className={`sidebar box-shadow`}>
			<div className='sidebar__toggle-nav'>
				<div className="sidebar__toggle-nav-input">
					<CheckInput	
						type={'checkbox'}
						inputId={'toggle-sidebar'}
						inputName={'toggle-sidebar'}
						classes={'check-container-toggle'}
						onChange={changeHandler}
					/>

				</div>
			</div>
			<div className='sidebar__logo-wrap'></div>
			<div className='sidebar__company-user'></div>


			<Navigation/>
		</div>
	)	
}