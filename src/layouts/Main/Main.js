import React, {useEffect} from 'react';
import styles from './Main.module.scss'

import Sidebar from 'components/Sidebar/Sidebar';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const Main = ({ children }) => {
	return (
		<div className={styles.grid}>
			<Sidebar />
			<Header />
			<main className='main-content'>{children}</main>
			<Footer />
		</div>
	)
}

export default Main;