import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Button.module.scss';

const Button = ({children, onClick, render, mixClasses, disabled, active, type, ...attrs}) => {
	const classes = classNames(
		mixClasses,
		styles.btn,
		{active}
	)

	const ButtonTag = attrs.href ? `a` : `button`;

	const onClickHandler = event => {
		if (disabled) {
			event.preventDefault();
		} else {
			return onClick(event);
		}
	}

	const CustomButton = props => {
		const renderElement = render(props);

		if (renderElement) {
			return React.Children.only(renderElement);
		} else {
			return <ButtonTag {...props}>{props.children}</ButtonTag>
		}
	}

	return (
		<CustomButton
			{...attrs}
			className={classes}
			onClick={onClickHandler}
			disabled={disabled}
		>
			{children}
		</CustomButton>
	)
}

Button.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func,
	mixClasses: PropTypes.string,
	disabled: PropTypes.bool,
	active: PropTypes.bool,
	type: PropTypes.string,
	pathTo: PropTypes.string,
	render: PropTypes.func
}

Button.defaultProps = {
	children: 'Button',
	onClick: () => {},
	mixClasses: '',
	disabled: false,
	active: false,
	type: ''
}

export default Button;