import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

import './Sidebar.scss';
import { Navigation } from './Navigation';
import { CheckInput } from 'components/CheckInput/CheckInput';
import Avatar from 'components/Avatar/Avatar';
import LogoFull from 'images/logo-full.svg';
import Logo from 'images/logo.svg';
import AvaCompany from 'images/avatar-company.png';

export const Sidebar = () => {
	// const initialState = !localStorage.toggleChecked ? true : JSON.parse(localStorage.toggleChecked);

	const [checked, setChecked] = useState(false);
	useEffect(() => localStorage.setItem('toggleChecked', checked), [checked]);

	const sidebarClasses = classNames(
		'sidebar',
		'shadow-box',
		{'sidebar_mini': !checked}
	)

	return (
		<CSSTransition
			in={checked}
			classNames={{
				enterActive: 'sidebar_full',
				exitDone: 'sidebar_mini'
			}}
			addEndListener={(node, done) => {

				const transitionEndElem = () => {
					return new Promise((resolve, reject)=> {
						node.addEventListener('transitionend', (event) => {
							if (event.target !== event.currentTarget) return false;
							resolve();
						});
					})
				}

				transitionEndElem().then(data => {
					node.removeEventListener('transitionend', transitionEndElem);
					done();
				});
				
			}}
		>
			<aside className={sidebarClasses}>
				<div className='sidebar__info'>
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

					<div className='sidebar__logo-wrap'>
						<NavLink to='/'>
							<img className='sidebar__logo sidebar__logo-full' src={LogoFull} alt='Логотип' />
							<img className='sidebar__logo sidebar__logo-mini' src={Logo} alt='Логотип' />
						</NavLink>
					</div>
					<div className='sidebar__company-user'>
						<div className='sidebar__company-avatar-wrap'>
							<Avatar 
								mixClass='sidebar__company-avatar'
								url={AvaCompany}
							/>
						</div>

						<div className="sidebar__company-name-wrap">
							<div className="sidebar__company-name sidebar__item-hidden">ДЕМО КОМПАНИЯ</div>
						</div>
					</div>
				</div>

				<Navigation/>
			</aside>
		</CSSTransition>
	)	
}