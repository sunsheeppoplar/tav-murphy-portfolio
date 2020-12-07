import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class DesktopNavBar extends Component {
	render() {
		return (
			<div>
				<NavLink to="/" activeClassName="nav-bar__link--selected" exact className="nav-bar__link">Work</NavLink>
				<NavLink to="/about" activeClassName="nav-bar__link--selected" exact className="nav-bar__link">About</NavLink>
				<NavLink to="/contact" activeClassName="nav-bar__link--selected" exact className="nav-bar__link">Contact</NavLink>
			</div>
		)
	}
}

export default DesktopNavBar;