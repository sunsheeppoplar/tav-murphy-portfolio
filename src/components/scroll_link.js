import React, { Component } from 'react';
import Scroll, { Helpers } from 'react-scroll';

class ScrollLink extends Component {
	render() {
		return (
			<div {...this.props}>
				{this.props.children}
			</div>
		)
	}
}

export default Helpers.Scroll(ScrollLink);