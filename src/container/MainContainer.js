import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from '../components/home'
import Contact from '../components/contact'
import About from '../components/about'
import NavBar from '../components/nav_bar'

class MainContainer extends Component {

  render() {
    return (
      <div>
				<NavBar />
  			<Route exact path="/about" component={About} />
  			<Route exact path="/contact" component={Contact} />
  			<Route exact path="/:id" component={Home} />
  			<Route exact path="/" component={Home} />
      </div>
    );
  }

}



export default MainContainer;
