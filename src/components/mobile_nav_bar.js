import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectMenu } from '../actions';

import AnimateHeight from 'react-animate-height';


class MobileNavBar extends Component {
	constructor() {
		super();

		this.state = {
			test: 1
		}
	}


	handleClick() {
		console.log(this.state, 'state')
		console.log(this.props, 'props')
		this.props.selectMenu();
	}

	render() {
		const { isClosed } = this.props;
		const height = isClosed ? 0 : 100;
		const navBarClass = isClosed ? '' : "nav-bar-mobile--open";
		const navLinkClass = isClosed;

		return (
			<div>
				<AnimateHeight height={ height } className={`wrapper--mobile ${navBarClass}`}>
					<NavLink 
						to="/"
						activeClassName="nav-bar__link--selected" 
						exact
						className="nav-bar__link"
						onClick={() => this.handleClick()}>
						Work
					</NavLink>
					<NavLink 
						to="/about"
						activeClassName="nav-bar__link--selected" 
						exact
						className="nav-bar__link"
						onClick={() => this.handleClick()}>
						About
					</NavLink>
					<NavLink 
						to="/contact"
						activeClassName="nav-bar__link--selected"
						exact
						className="nav-bar__link"
						onClick={() => this.handleClick()}>
						Contact
					</NavLink>
				</AnimateHeight>
				<div className="wrapper--mobile" onClick={() => this.handleClick()}>Menu</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	const { isClosed } = state.mobileNav;
	return { isClosed }
}

export default connect(mapStateToProps, { selectMenu })(MobileNavBar);