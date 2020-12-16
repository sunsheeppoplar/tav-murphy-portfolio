import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';

import _ from 'lodash';

import { fetchVideos } from '../actions';
import videos_list from './videos_list';

class Video extends Component {
    componentDidMount() {
        if (_.isEmpty(this.props.video)) {
            this.props.fetchVideos();
        }
    }

    render() {
        const { video } = this.props;
        const { link, name } = video;

        const videoUrl = video ? link : '';
        
        return (
            <div className="player-layout">
                <div className="player-container">
                    <ReactPlayer
                        className="video-player"
                        url={videoUrl}
                        height="100%"
                        width="100%"
                    />
                </div>
                <div className="player-title">{name}</div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const { location: { pathname }} = ownProps;
    const pathnameWithoutLeadingSlash = pathname.replace('/', '');

    if (pathnameWithoutLeadingSlash === 'reel') {
        return {
            video: {
                link: 'https://vimeo.com/250668972',
                name: 'Reel'
            }
        }
    }

    const video = _.find(state.videos, function(video) {
        const { slug } = video;

        return video.slug === pathnameWithoutLeadingSlash
    }) || {};


	return { video };
}

export default connect(mapStateToProps, { fetchVideos })(Video);