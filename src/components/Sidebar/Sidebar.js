import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useMediaQuery from 'react-use-media-query-hook';
import { toggleTypeSidebar, addTypeSidebar, removeTypeSidebar } from 'store/actions/sidebarActions';
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
	const isMobile = useMediaQuery('(max-width: 991px)');
	const isDesktop = useMediaQuery('(max-width: 991px)');

	const sidebarState = useSelector(state => state.sidebarReducer);
	const dispatch = useDispatch();
console.log(sidebarState)
	useEffect(() => {
		
		localStorage.setItem('toggleChecked', sidebarState.sidebarType);
		
	}, [sidebarState.sidebarType]);

	useEffect(() => {
		if (isMobile) {
			dispatch(removeTypeSidebar());
		} else {

			dispatch(addTypeSidebar());
		}
		
	}, [isMobile]);

	const sidebarClasses = classNames(
		'sidebar',
		'shadow-box',
		{'sidebar_mini': !sidebarState.sidebarType}
	)
	
	const inSidebar = isMobile ? sidebarState.visible : sidebarState.sidebarType;
	return (
		<CSSTransition
			in={sidebarState.visible}
			timeout={0}
			mountOnEnter
			unmountOnExit
		>
			<div className='sidebar-wrap'>
				<CSSTransition
					in={sidebarState.sidebarType}
					addEndListener={(node, done) => {
						node.addEventListener('transitionend', done, false);
					}}
					classNames={{
						enterActive: 'sidebar_full',
						exitDone: 'sidebar_mini'	
					}}
				>
					<aside className={sidebarClasses}>
						<div className='sidebar__info'>
							<div className='sidebar__toggle-nav'>
								<div className='sidebar__toggle-nav-input'>
									{!isMobile && 
										<CheckInput	
											type={'checkbox'}
											inputId={'toggle-sidebar'}
											inputName={'toggle-sidebar'}
											classes={'check-container-toggle'}
											checked={sidebarState.sidebarType}
											onChange={() => dispatch(toggleTypeSidebar())}
										/>
									}
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
			</div>
		</CSSTransition>
	)	
}