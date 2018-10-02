import React, { Component } from 'react';

import InfoCopy from './InfoCopy';
import InfoImage from './InfoImage';
import ClientsList from './Clients/List';

class About extends Component {
	render() {
		return(
			<div className="about-wrapper">
				<div className="about__info">
					<InfoCopy />
					<InfoImage />
				</div>
				<ClientsList />
			</div>
		);
	}
}

export default About;