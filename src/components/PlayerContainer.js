import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class PlayerContainer extends Component {

  render() {
    // let selectedVideoUrl;
    //
		// // at index (/), id === undefined
		// const differentVideoSelected = this.props.match.params.id;
    //
		// if (differentVideoSelected) {
		// 	_.map(this.props.videos, function(video) {
		// 		if (video.slug === differentVideoSelected) {
		// 			selectedVideoUrl = video.link;
		// 		}
		// 	})
		// } else {
		// 	selectedVideoUrl = 'https://vimeo.com/90509568'
		// }

    console.log(this.props.match.params.id);
    return (
      <div>
        <ReactPlayer url={selectedVideoUrl} className="player-container"/>
      </div>
    );
  }

function mapStateToProps(state) {
  	return { videos: state.videos }
}

export default connect(mapStateToProps)(PlayerContainer);
