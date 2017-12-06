import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<div>
				<h1 className="nav-bar__header"><Link to="/">TAVNER MURPHY</Link></h1>
				<h4 className="nav-bar__subheader">Director of Photography</h4>
			</div>
		)
	}
}

export default Header;