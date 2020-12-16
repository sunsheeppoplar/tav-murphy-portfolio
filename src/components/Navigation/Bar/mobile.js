import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectMenu } from '../../../actions';

import AnimateHeight from 'react-animate-height';
import navLinks from '../nav_links';

class MobileNavBar extends Component {
	constructor() {
		super();
	}


	handleClick() {
		this.props.selectMenu();
	}

	render() {
		const { isClosed } = this.props;
		const height = isClosed ? 0 : 100;
		const navBarClass = isClosed ? '' : "nav-bar-mobile--open";

		return (
			<div>
				<AnimateHeight height={ height } className={`wrapper--mobile ${navBarClass}`}>
					{
						navLinks.map(link => {
							const { label, to } = link;
							
							return (
								<NavLink
									key={`${label}-${to}-mobile`}
									to={to}
									activeClassName="nav-bar__link--selected"
									exact
									className="nav-bar__link"
									onClick={() => this.handleClick()}
								>
								{label}
								</NavLink>
							)
						})
					}
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