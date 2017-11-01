import React, { Component } from 'react';

class About extends Component {
	render() {
		return(
			<div className="about">
				<div className="about__info">
					<div className="about__info__copy">
						Arma virumque cano, Troiae qui primus ab oris
						Italiam, fato profugus, Laviniaque venit
						litora, multum ille et terris iactatus et alto
						vi superum saevae memorem Iunonis ob iram;
						multa quoque et bello passus, dum conderet urbem,
						inferretque deos Latio, genus unde Latinum,
						Albanique patres, atque altae moenia Romae.

						Musa, mihi causas memora, quo numine laeso,
						quidve dolens, regina deum tot volvere casus
						insignem pietate virum, tot adire labores
						impulerit. Tantaene animis caelestibus irae?
					</div>
					<div className="about__info__image">
						<img src="../assets/tm_about.jpg"></img>
					</div>
				</div>
			</div>
		);
	}
}

export default About;