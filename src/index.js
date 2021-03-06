import React from 'react';
import ReactDOM from 'react-dom';
import './fonts/fonts.scss';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';


const store = createStore(
    rootReducer,
    composeWithDevTools(
	  	applyMiddleware(thunk)
	)
)

ReactDOM.render(
	<Provider store={store}>
		<Router history={createBrowserHistory()}>
			<App />
		</Router>
	</Provider>, 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
