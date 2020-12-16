import React, { Component } from 'react';
import { connect } from 'react-redux';

import VideosList from './videos_list';
class Home extends Component {
	render() {
		return(
			<div>
				<VideosList history={this.props.history} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { videos: state.videos }
}

export default connect(mapStateToProps)(Home);