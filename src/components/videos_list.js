import _ from 'lodash';
import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from '../actions'

class VideosList extends Component {
	componentDidMount() {
		this.props.fetchVideos();
	}

	renderVideos() {
		return _.map(this.props.videos, video => {
			return (
				<div key={video.name} className="videos-list__each">
					<img src={video.pictures.sizes[2].link} />
					<div className="videos-list__each__title">{video.name}</div>
				</div>
			);
		})
	}

	render() {
		console.log(this.props.videos)
		return(
			<div className="videos-list">
				{this.renderVideos()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { videos: state.videos }
}

export default connect(mapStateToProps, { fetchVideos })(VideosList);