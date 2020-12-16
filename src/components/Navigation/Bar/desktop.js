import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import navLinks from '../nav_links';

class DesktopNavBar extends Component {
	render() {
		return (
			<div>
				{navLinks.map(link => {
					const { label, to } = link;

					return (
						<NavLink
							key={`${label}-${to}-desktop`}
							to={to}
							activeClassName="nav-bar__link--selected"
							exact
							className="nav-bar__link"
						>
						{label}
						</NavLink>
					);
				})}
			</div>
		)
	}
}

export default DesktopNavBar;