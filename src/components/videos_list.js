import _ from 'lodash';
import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVideos, selectVideo } from '../actions'

import Scroller from './scroller';


class VideosList extends Component {
	componentDidMount() {
		this.props.fetchVideos();
	}

	handleClick(video) {
		const { history, selectVideo } = this.props;
		const { name, slug } = video;

		selectVideo(video);
		history.push(slug, { name });
	}

	renderVideos() {
		return _.map(this.props.videos, video => {
			return (
				<Scroller className="videos-list__each" key={video.name} smooth={true} to="react-player" onClick={() => this.handleClick(video)}>
					<img className="videos-list__each__img" src={video.pictures.sizes[2].link} />
					<div className="videos-list__each__title">{video.name}</div>
				</Scroller>
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