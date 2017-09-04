import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import NavBar from './components/nav_bar';

ReactDOM.render(
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
  , document.querySelector('.container')
)