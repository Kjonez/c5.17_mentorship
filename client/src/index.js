import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

import App from './components/app';
import types from './actions/types';

const createStoreWithMiddleWare = applyMiddleware(thunk, promise)(createStore);

const store = createStoreWithMiddleWare(rootReducer);
if (localStorage.getItem('token')) {
	store.dispatch({ type: types.LOGIN });
}

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
