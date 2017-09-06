import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
	render() {
		return(
			<div className="nav-bar">
				<h1 className="nav-bar__header">TAVNER MURPHY</h1>
				<h4 className="nav-bar__subheader">Director of Photogrphy</h4>
				<div>
					<Link to="/" className="nav-bar__link">Work</Link>
					<Link to="/about" className="nav-bar__link">About</Link>
					<Link to="/contact" className="nav-bar__link">Contact</Link>
				</div>
			</div>
		);
	}
}

export default NavBar;