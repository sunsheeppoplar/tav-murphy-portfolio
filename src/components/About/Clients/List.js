import React, { Component } from 'react';

import LogoItem from './LogoItem';

class ClientsList extends Component {
	constructor(props) {
		super(props)

		const logoPathOrder = [
			'dropbox_logo.png',
			'vice_logo.png',
			'i-d_magazine_logo.png',
			'red_bull_logo.png',
			'omaze_logo.png',
			'dreamworks_tv_logo.png',
			'american_eagle_outfitters_logo.png',
			'complex_logo.png',
			'new_york_live_arts_logo.svg',
			'vaynermedia_logo.png'
		]

		this.state = { logoPathOrder }
	}

	render() {
		return(
			<div className="about__logos-container">
				<h3 className="about__logos__header">Former Clients</h3>
				{this.state.logoPathOrder.map((logoPath, i) => {
					return <LogoItem key={i} logoPath={logoPath} />
				})}
			</div>
		);
	}
}

export default ClientsList;