import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Element as ScrollElement } from 'react-scroll';
import VideosList from './videos_list';
import ReactPlayer from 'react-player';

class Home extends Component {
	render() {
		let videoUrl = 'https://vimeo.com/250668972';

		// at index (/), state is undefined
		const { location: { pathname, state: { name = ''} = {} }, videos } = this.props;

		if (pathname && pathname !== '/') {
			_.map(videos, function(video) {
				if (video.name === name) {
					videoUrl = video.link;
				}
			})
		}

		// deliberate empty strings - vid player behaves a bit oddly when trying to override defaults with css otherwise
		return(
			<div>
				<ScrollElement name="react-player">
					<ReactPlayer url={videoUrl} height={500} width={1200} className="player-container" />
				</ScrollElement>
				<VideosList history={this.props.history} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { videos: state.videos }
}

export default connect(mapStateToProps)(Home);