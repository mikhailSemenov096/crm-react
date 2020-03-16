import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Sidebar} from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Home} from './pages/Home/Home.js';
import {Login} from './pages/Login/Login';
import Debtors from './pages/Debtors/Debtors';
import {Profile} from './pages/Profile/Profile';
import {Telephony} from './pages/Telephony/Telephony';
import ButtonUp from './components/ButtonUp';

const App = () => {
  return (
  	<BrowserRouter>
  		<div className='main-grid'>
			<Sidebar />
			<Header/>
			<main className='main-content'>
				<Switch>
		  		<Route path='/login' component={Login}></Route>
		  		<Route path='/debtors' component={Debtors} title={'Задолжники'}></Route>
	  			<Route path='/telephony' component={Telephony}></Route>
	  			<Route path='/profile' component={Profile}></Route>
	  			<Route path='/' exact component={Home}></Route>
	  		</Switch>
			</main>
			<Footer />
  		</div>
  		<ButtonUp />
    </BrowserRouter>
  );
}

export default App;
