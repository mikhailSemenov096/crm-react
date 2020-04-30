import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Login.module.scss';

//components
import ShadowItem from 'components/ShadowItem/ShadowItem';
import Button from 'components/Button/Button';
import TextInput from 'components/TextInput/TextInput';
import CustomAudio from 'components/CustomAudio/CustomAudio';

const Login = ({ children }) => {
	const [value, setValue] = useState('');

	useEffect(() => {
		document.body.className = 'body-login';

		return () => document.body.className = '';
	}, []);

	console.log(value)
	return (
		<div className={styles.grid}>
			<div className={styles.info}>
				<h1>приветствие</h1>
			</div>
			<ShadowItem mixClasses={styles.mainContainer}>
				<CustomAudio />
				
				{/*<Button
					render={props => <NavLink {...props} to={'/'}>{props.children}</NavLink>} 
				>
					Вход
				</Button> 

				<TextInput 
					id={'phone'}
					label={'Введите номер телефона'}
					format={'fullname'}
					autoComplete='off'
					onChange={value => setValue(value)}
					value={value}
				/>*/}
				
			</ShadowItem>
		</div>
	)
}


export default Login;