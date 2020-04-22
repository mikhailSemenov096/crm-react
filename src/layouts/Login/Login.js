import React, {useEffect} from 'react';
import styles from './Login.module.scss';

//components
import ShadowItem from 'components/ShadowItem/ShadowItem';

const Login = ({ children }) => {

	useEffect(() => {
		document.body.className = 'body-login';

		return () => document.body.className = '';
	}, []);

	return (
		<div className={styles.grid}>
			<div className={styles.info}>
				<h1>приветствие</h1>
			</div>
			<div className={styles.mainBlock}>
				<ShadowItem mixClasses='dsd ds'>
					dfd
				</ShadowItem>
			</div>
		</div>
	)
}


export default Login;