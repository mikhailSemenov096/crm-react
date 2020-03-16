import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toggleTypeSidebar from 'store/actions/sidebarActions';

import classNames from 'classnames';
import './Sidebar.scss';

import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Navigation } from './Navigation';
import { CheckInput } from 'components/CheckInput/CheckInput';

import Avatar from 'components/Avatar/Avatar';
import LogoFull from 'images/logo-full.svg';
import Logo from 'images/logo.svg';
import AvaCompany from 'images/avatar-company.png';

export const Sidebar = () => {
	const sidebarState = useSelector(state => state.sidebarReducer);

	const dispatch = useDispatch();

	useEffect(() => localStorage.setItem('toggleChecked', sidebarState), [sidebarState]);

	const sidebarClasses = classNames(
		'sidebar',
		'shadow-box',
		{'sidebar_mini': !sidebarState}
	)

	return (
		<CSSTransition
			in={sidebarState}
			timeout={300}
			classNames={{
				enterActive: 'sidebar_full',
				exitDone: 'sidebar_mini'
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
								checked={sidebarState}
								onChange={() => dispatch(toggleTypeSidebar())}
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