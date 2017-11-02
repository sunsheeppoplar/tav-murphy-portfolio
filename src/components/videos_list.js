import _ from 'lodash';
import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVideos, selectVideo } from '../actions'

class VideosList extends Component {
	componentDidMount() {
		this.props.fetchVideos();
	}

	handleClick(video) {
		this.props.selectVideo(video);
		this.props.history.push(video.slug)
	}

	renderVideos() {
		return _.map(this.props.videos, video => {
			return (
				<div key={video.name} className="videos-list__each" onClick={() => this.handleClick(video)}>
					<img className="videos-list__each__img" src={video.pictures.sizes[2].link} />
					<div className="videos-list__each__title">{video.name}</div>
				</div>
			);
		})
	}

	render() {
		return(
			<div className="wrapper">
				<div className="videos-list">
					{this.renderVideos()}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { videos: state.videos }
}

export default connect(mapStateToProps, { fetchVideos, selectVideo })(VideosList);