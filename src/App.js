import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import ButtonUp from './components/ButtonUp';
import Notice from './components/Notice/Notice';

//pages
import Home from './pages/Home/Home.js';
// import Login from './pages/Login/Login';
import Debtors from './pages/Debtors/Debtors';
import Profile from './pages/Profile/Profile';
import Telephony from './pages/Telephony/Telephony';
import Auth from './pages/Auth/Auth';

//layouts
import Main from './layouts/Main/Main.js';
import Login from './layouts/Login/Login.js';


const LayoutRoute = ({component: Component, layout: Layout, ...params}) => (
	<Route 
		{...params} 
		render={props => (
			<Layout>
				<Component {...props}/>
			</Layout>
		)}
	/>
)

const App = () => {
  return (
  	<BrowserRouter>
  		<Switch>
        <LayoutRoute path='/login' layout={Login} component={Auth}/>
        <LayoutRoute path='/profile' layout={Main} component={Profile}/>
        <LayoutRoute path='/telephony' layout={Main} component={Telephony}/>
        <LayoutRoute path='/debtors' layout={Main} component={Debtors}/>
  			<LayoutRoute path='/' exact layout={Main} component={Home}/>
  		</Switch>
  		<ButtonUp />
  		<Notice />
    </BrowserRouter>
  );
}

export default App;
