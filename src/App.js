import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Sidebar} from './components/Sidebar/Sidebar';
import {Home} from './pages/Home/Home.js';
import {Login} from './pages/Login/Login';
import {Debtors} from './pages/Debtors/Debtors';
import {Profile} from './pages/Profile/Profile';
import {Telephony} from './pages/Telephony/Telephony';

function App() {
  return (
  	<BrowserRouter>
  		<div className="container">
  			<div className="row">
  				<div className="col-auto">
  					<Sidebar></Sidebar>
  				</div>
  				<div className="col">
						<Switch>
				  		<Route path='/login' component={Login}></Route>
				  		<Route path='/debtors' component={Debtors}></Route>
			  			<Route path='/telephony' component={Telephony}></Route>
			  			<Route path='/profile' component={Profile}></Route>
			  			<Route path='/' exact component={Home}></Route>
			  		</Switch>
  				</div>
  			</div>
  		</div>
    </BrowserRouter>
  );
}

export default App;
