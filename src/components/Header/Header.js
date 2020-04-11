import React from 'react';
import { useDispatch } from 'react-redux';
import useMediaQuery from 'react-use-media-query-hook';
import { addTypeSidebar } from 'store/actions/sidebarActions';
import './Header.scss';
import CurrentTime from 'components/CurrentTime';
import Avatar from 'components/Avatar/Avatar';
import MenuBtn from 'components/MenuBtn/MenuBtn';

const Header = (props) => {
	const isMobile = useMediaQuery('(max-width: 991px)');

	const dispatch = useDispatch();

	return (
		<header className='header shadow-box'>
			{isMobile && <MenuBtn clickHandler={() => dispatch(addTypeSidebar())}/>}
			<div className='header__info'>
				<div className='header__time-wrap'>
					<CurrentTime 
						mixClass={'header__time'}
					/>
				</div>
				<div className='header__person'>
					<div className='header__person-user'>
						<Avatar 
							mixClass='header__person-avatar'
						/>
						<div className='header__person-name'>Михаил Семёнов</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;