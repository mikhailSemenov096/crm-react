import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useMediaQuery from 'react-use-media-query-hook';
import { toggleTypeSidebar, addTypeSidebar, removeTypeSidebar } from 'store/actions/sidebarActions';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import './Sidebar.scss';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Navigation } from './Navigation';
import { CheckInput } from 'components/CheckInput/CheckInput';
import CloseBtn from 'components/CloseBtn/CloseBtn';

import Avatar from 'components/Avatar/Avatar';
import LogoFull from 'images/logo-full.svg';
import Logo from 'images/logo.svg';
import AvaCompany from 'images/avatar-company.png';

const Sidebar = () => {
	const isMobile = useMediaQuery('(max-width: 991px)');

	const sidebarState = useSelector(state => state.sidebarReducer);
	const dispatch = useDispatch();

	useEffect(() => localStorage.setItem('toggleChecked', sidebarState.sidebarType), [sidebarState.sidebarType]);

	useEffect(() => {
		if (isMobile) {
			dispatch(removeTypeSidebar(false));
		} else {
			dispatch(addTypeSidebar(false));
		}	
	}, [isMobile]);

	const sidebarClasses = classNames(
		'sidebar',
		'shadow-box',
		{'sidebar_mini': !sidebarState.sidebarType && !isMobile}
	)

	return (
		<CSSTransition
			in={sidebarState.visible}
			addEndListener={(node, done) => {
				node.addEventListener('transitionend', done, false);
			}}
			mountOnEnter
			unmountOnExit
			enter={sidebarState.transition}
			exit={sidebarState.transition}
		>
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
							{!isMobile &&
								<div className='sidebar__toggle-nav-input'>
									<CheckInput	
										type={'checkbox'}
										inputId={'toggle-sidebar'}
										inputName={'toggle-sidebar'}
										classes={'check-container-toggle'}
										checked={sidebarState.sidebarType}
										onChange={() => dispatch(toggleTypeSidebar())}
									/>
								</div>
							}
		
						</div>

						<div className='sidebar__logo-wrap'>
							<NavLink to='/' onClick={() => dispatch(removeTypeSidebar(true))}>
								<img className='sidebar__logo sidebar__logo-full' src={LogoFull} alt='Логотип' />
								<img className='sidebar__logo sidebar__logo-mini' src={Logo} alt='Логотип' />
							</NavLink>

							{isMobile && <CloseBtn clickHandler={() => dispatch(removeTypeSidebar(true))}/>}
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

					<Navigation clickHandler={() => dispatch(removeTypeSidebar(true))}/>
				</aside>
			</CSSTransition>
		</CSSTransition>
	)	
}

export default Sidebar;