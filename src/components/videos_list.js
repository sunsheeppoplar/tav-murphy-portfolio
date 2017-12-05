import _ from 'lodash';
import React,  { Component } from 'react';
import { Link } from 'react-router-dom'
import { fetchVideos, selectVideo } from '../actions'
import VideoCard from './VideoCard'

class VideosList extends Component {

	handlerSelectedVideo = (video) => {
		this.props.selectedVideo(video)
	}

	render() {
		const { videos = [] } = this.props
		return(
			<div className="videos-list">
				{videos.map(video => (
					<Link key={video.link} to={`/${video.slug}`} onClick={() => this.handlerSelectedVideo(video)}>
						<VideoCard  video={video}/>
					</Link>
				))}
			</div>
		);
	}
}


export default VideosList;
