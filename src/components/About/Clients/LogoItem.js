import React, { Component } from 'react';

class ClientsLogoItem extends Component {

	render() {
		const basePath = '../assets/logos/';

		return (
			<div className="about__logos__item">
				<img src={basePath + this.props.logoPath} className="about__logos__item__image" />
			</div>
		)
	}
}

export default ClientsLogoItem;