import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import { fetchVideos, selectVideo } from './actions'
import reducers from './reducers';
import MainContainer from './container/MainContainer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers,
	composeEnhancers(
	    applyMiddleware(promise)
	  )
	)

store.dispatch(fetchVideos());

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<MainContainer/>
		</BrowserRouter>
	</Provider>
  , document.querySelector('.container')
)
