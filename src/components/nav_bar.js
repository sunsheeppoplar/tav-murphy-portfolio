import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends Component {
	render() {
		return(
			<div className="nav-bar wrapper">
				<h1 className="nav-bar__header"><Link to="/">TAVNER MURPHY</Link></h1>
				<h4 className="nav-bar__subheader">Director of Photogrphy</h4>
				<div>
					<NavLink to="/" activeClassName="nav-bar__link--selected" exact className="nav-bar__link">Work</NavLink>
					<NavLink to="/about" activeClassName="nav-bar__link--selected" exact className="nav-bar__link">About</NavLink>
					<NavLink to="/contact" activeClassName="nav-bar__link--selected" exact className="nav-bar__link">Contact</NavLink>
				</div>
			</div>
		);
	}
}

export default NavBar;