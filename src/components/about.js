import React, { Component } from 'react';

class About extends Component {
	render() {
		return(
			<div className="about wrapper">
				<div className="about__info">
					<div className="about__info__copy">
						<p>
							Tavner is a Director of Photography and Camera Operator based in New York City. His work has
							screened at film festivals around the country and world. A backpacker, photographer, and music
							junkie, he thrives on telling stories through visual imagery and highlighting the
							unconventional, the uncomfortable, and the extraordinary.
						</p>
						<p>
							Past Clients include: Dropbox, VICE Media, i-D, Red Bull, Omaze, DreamworksTV, Okayplayer, American Eagle,  Complex, True Entertainment, The Salvation Army
						</p>
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