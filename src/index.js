import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import About from './components/About/About';
import Contact from './components/contact';
import Home from './components/home';
import Navigation from './components/Navigation';
import Video from './components/video';

const createStoreWithMiddleWare = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleWare(reducers)}>
		<BrowserRouter>
			<div>
				<Navigation />
				<Switch>
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/:id" component={Video} />
					<Route path="/" component={Home} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	document.querySelector('.container')
)