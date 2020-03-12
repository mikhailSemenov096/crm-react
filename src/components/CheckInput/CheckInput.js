import React from 'react';
import './CheckInput.scss';

export const CheckInput = ({
	type, inputId, inputName, classes, text, onChange
}) => {
	return (
		<label htmlFor={inputId} className={`check-container ${classes}`}>
			<input 
				type={type} 
				id={inputId} 
				name={inputName} 
				className='check-container__input'
				onChange={onChange}
			/>
			<span className='check-container__btn'></span>
			{ text && 
				<span className='check-container__descr'>{text}</span>
			}
		</label>
	)
}

CheckInput.defaultProps = {
	classes: '',
	type: 'checkbox',
	onChange: ()=> {}
}