import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Element as ScrollElement } from 'react-scroll';
import VideosList from './videos_list';
import ReactPlayer from 'react-player';

class Home extends Component {

	render() {
		let selectedVideoUrl;

		// at index (/), id === undefined
		const differentVideoSelected = this.props.match.params.id;

		if (differentVideoSelected) {
			_.map(this.props.videos, function(video) {
				if (video.slug === differentVideoSelected) {
					selectedVideoUrl = video.link;
				}
			})
		} else {
			selectedVideoUrl = 'https://vimeo.com/250668972'
		}

		// deliberate empty strings - vid player behaves a bit oddly when trying to override defaults with css otherwise
		return(
			<div>
				<ScrollElement name="react-player">
					<ReactPlayer url={selectedVideoUrl}  height={500} width={1200} className="player-container" />
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