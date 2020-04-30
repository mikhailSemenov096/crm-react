import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './ShadowItem.module.scss';

const ShadowItem = ({ children, mixClasses }) => {
	const stylesShadow = classNames(styles.container, mixClasses);

	return (
		<div className={stylesShadow}>
			{ children }
		</div>
	)
}

ShadowItem.propTypes = {
	children: PropTypes.node.isRequired,
	mixClasses: PropTypes.string
}

export default ShadowItem;