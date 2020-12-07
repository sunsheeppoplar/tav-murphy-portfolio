import React, { Component } from 'react';

import Header from '../header';
import DesktopNavBar from './Bar/desktop';
import MobileNavBar from './Bar/mobile';

class Navigation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			windowWidth: window.innerWidth
		}
	}

	componentDidMount() {
		window.addEventListener('resize', this.handleResize);
	}

	handleResize = () => {
		this.setState({
			windowWidth: window.innerWidth
		})
	}

	render() {
		const screen = 660;

		if (this.state.windowWidth > screen) {
			return(
				<div className="nav-bar wrapper">
					<Header />
					<DesktopNavBar />
				</div>
			);
		} else {
			return (
				<div className="nav-bar wrapper">
					<MobileNavBar />
					<Header />
				</div>
			)
		}
	}
}

export default Navigation;