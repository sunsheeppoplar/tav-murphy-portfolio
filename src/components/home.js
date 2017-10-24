import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

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
			selectedVideoUrl = 'https://vimeo.com/90509568'
		}

		return(
			<div>
				<ReactPlayer url={selectedVideoUrl} className="player-container"/>
				<VideosList history={this.props.history} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { videos: state.videos }
}

export default connect(mapStateToProps)(Home);