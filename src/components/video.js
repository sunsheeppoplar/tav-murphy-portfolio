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
        const { video } = this.props
        const videoUrl = video ? video.link : '';
        
        return (
            <div>
                <ReactPlayer url={videoUrl} height={500} width={1200} className="player-container" />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const { location: { pathname }} = ownProps;
    const pathnameWithoutLeadingSlash = pathname.replace('/', '');

    const video = _.find(state.videos, function(video) {
        const { slug } = video;

        return video.slug === pathnameWithoutLeadingSlash
    }) || {};


	return { video };
}

export default connect(mapStateToProps, { fetchVideos })(Video);