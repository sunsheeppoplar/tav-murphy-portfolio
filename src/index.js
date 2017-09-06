import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import NavBar from './components/nav_bar';

const createStoreWithMiddleWare = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleWare(reducers)}>
		<BrowserRouter>
			<div>
				<NavBar />
				<Switch>
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/" component={Home} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>
  , document.querySelector('.container')
)