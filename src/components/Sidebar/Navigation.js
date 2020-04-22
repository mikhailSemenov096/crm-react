import React from 'react';
import { NavLink } from 'react-router-dom';
import IconSvg from 'components/IconSvg';

export const Navigation = ({clickHandler}) => {
	const sidebarItems = [
		{
			to: '/telephony',
			icon: 'icon-calls',
			text: 'История звонков'
		},

		{
			to: '/profile',
			icon: 'icon-house',
			text: 'Мой профиль'
		},

		{
			to: '/debtors',
			icon: 'icon-fire',
			text: 'Задолжники'
		}
	]

	return (
		<nav className='sidebar__nav'>
			<ul className='sidebar__nav-list'>
				{	
					sidebarItems.map((item, index) => {
						return (
							<li className='sidebar__nav-item' key={`nav-item-${index}`}>
								<NavLink className='sidebar__nav-link' to={item.to} activeClassName='sidebar__nav-link_active' onClick={clickHandler}>
									<span className='sidebar__nav-icon'>
										<IconSvg icon={item.icon} />
									</span>
									<span className='sidebar__nav-descr sidebar__item-hidden'>{item.text}</span>
								</NavLink>
							</li>
						)
					})
				}
			</ul>
		</nav>
	)
}
