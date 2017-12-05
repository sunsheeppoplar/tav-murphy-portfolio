import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class VideoCard extends Component {

  render() {
    const { video } = this.props
    return (
      <div key={video.name} className="videos-list__each">
					<img src={video.pictures.sizes[2].link} />
					<div className="videos-list__each__title">{video.name}</div>
			</div>
    );
  }

}

export default VideoCard;
