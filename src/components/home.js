import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import VideosList from './videos_list';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux'
import { selectVideo } from '../actions'

class Home extends Component {

	render() {
		const { videos, selectedVideo, selVideo } = this.props
		return(
			<div>
				<ReactPlayer url={selectedVideo.link} className="player-container"/>
				<VideosList videos={videos} selectedVideo={selVideo}/>
			</div>
		);
	}
}

const mapStateToProps = (reducer) => {
  const { videos = [], selectedVideo } = reducer
  return {
      videos,
			selectedVideo
  }
}

const mapDispatchToProps = dispatch => {
	return {
		selVideo: (link) => dispatch(selectVideo(link))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
