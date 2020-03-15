import React from 'react';
import './Header.scss';

import CurrentTime from 'components/CurrentTime';
import Avatar from 'components/Avatar/Avatar';

const Header = (props) => {
	return (
		<header className="header shadow-box">
			<div className="header__info">
				<div className="header__time-wrap">
					<CurrentTime 
						mixClass={'header__time'}
					/>
				</div>
				<div className="header__person">
					<div className="header__person-user">
						<Avatar 
							mixClass='header__person-avatar'
						/>
						<div className="header__person-name">Михаил Семёнов</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;