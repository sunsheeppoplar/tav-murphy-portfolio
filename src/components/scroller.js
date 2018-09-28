import React, { Component } from 'react';
import Scroll, { ScrollLink } from 'react-scroll';

class Scroller extends Component {
	render() {
		return (
			<div {...this.props}>
				{this.props.children}
			</div>
		)
	}
}

export default ScrollLink(Scroller);