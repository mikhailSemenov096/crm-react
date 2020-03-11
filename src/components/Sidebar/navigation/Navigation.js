import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconSvg } from 'components/IconSvg';

export const Navigation = () => (
	<nav className='sidebar__nav'>
		<ul className='sidebar__nav-list'>
			<li className='sidebar__nav-item'>
				<NavLink className='sidebar__nav-link' to='/telephony'>
					История звонков
				</NavLink>
			</li>
			<li className='sidebar__nav-item'>
				<NavLink className='sidebar__nav-link' to='/debtors'>
					Задолжники
				</NavLink>
			</li>
			<li className='sidebar__nav-item'>
				<NavLink className='sidebar__nav-link' to='/profile'>
					<span className="sidebar__nav-icon">
						<IconSvg 
							icon='icon-house'
						/>
					</span>
					Мой профиль
				</NavLink>
			</li>
		</ul>
	</nav>
)
