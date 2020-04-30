import React, {useState, useEffect, useRef, useLayoutEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import InputMask from 'react-input-mask';
import styles from './TextInput.module.scss';

const TextInput = ({id, className, onChange, value, format, label, error, ...attrs}) => {
	const [focusInput, setFocusInput] = useState({active: false, focus: false});
	const [errorInput, setErrorInput] = useState('');

	// useEffect(() => {

	// 	// console.log('value', value);

	// 	// if (typeInput === 'phone') {
	// 	// 	if (inputText.current) {
			

	//  // 			inputText.current.setSelectionRange(cursorPosPhone, cursorPosPhone);

	//  // 			// console.log(inputText.current.selectionStart);
	//  // 		}
	// 	// }
	// 	if (value !== '' && !setFocusInput.active) {
	// 		setFocusInput({...focusInput, active: true, focus: false});
	// 	}
	// }, [value]);
	const getMask = () => {
		switch (format) {
			case 'fullname':
				return '';
			default: 
				return format; 
		}
	}

	// Validation depending on the type input
	const validateEmail = value => {
		const emailReg = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
		const emailTest = emailReg.test(value);

		if (!emailTest) {
			setErrorInput('Неверный формат e-mail');
		} else {
			setErrorInput('');
		}
	}

	const validatePhone = value => {
		if (value.length < 10) {
			return 'Номер телефона должен состоять из 10 цифр';
		} else {
			setErrorInput('');
		}
 	}

 	const validateInputValue = value => {

 	}

 	// Format input depending on the type
	const formatFullname = value => {
		const arr = value.replace(/[^A-zА-яЁё ]/g, '').split(' ');
		const valueArr = arr.map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());

		return valueArr.join(' ');
 	}

	// Handlers
	const focusHandler = event => {
		setFocusInput({...focusInput, active: true, focus: true});
	}

	const blurHandler = event => {
		const { value } = event.target;

		if (value === '') {
			setFocusInput({...focusInput, active: false, focus: false});
		} else {
			setFocusInput({...focusInput, active: true, focus: false});
		}


	};

	const changeHandler = event => {
		const { value } = event.target;

		switch (format) {
			case 'fullname': 
				return onChange(formatFullname(value));
			default:
				return onChange(value);
		}
	}

	// Classes
	const classesWrapper = classNames(
		styles.wrapper,
		className,
		{error},
		{[styles.wrapperActive]: focusInput.active},
		{[styles.wrapperDefault]: focusInput.active && !focusInput.focus},
	)

	return (
		<div className={classesWrapper}>
			{label && <label className={styles.label} htmlFor={id}>{label}</label>}

			<InputMask
				name={id}
				id={id} 
				mask={getMask()}
				className={styles.input}
				onFocus={focusHandler}
				onBlur={blurHandler}
				onChange={changeHandler}
				value={value}
				{...attrs}
			/>

			{errorInput !== '' && <span className={styles.errorText}>{errorInput}</span>}
		</div>
	)
}

TextInput.propTypes = {
	id: PropTypes.string.isRequired,
	className: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func
}

TextInput.defaultProps = {
	className: '',
	label: '',
	value: ''
}

export default TextInput;