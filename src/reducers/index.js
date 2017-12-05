import { FETCH_VIDEOS, SELECT_VIDEO } from '../actions';

const initalState = {
	videos: [],
	selectedVideo: {
		link: "https://vimeo.com/127388526"
	}
}

const reducerVideo = (state = initalState, action) => {
	switch (action.type) {
		case FETCH_VIDEOS:
			console.log(action.payload.data.data);
			const videoArray = action.payload.data.data.reduce((acum, video) => {
				const { link, name, pictures } = video
				acum.push({
					link,
					name,
					pictures,
					slug: video.name.toLowerCase().split(' ').join('-').replace(/-{2,}/g, '-')
				})
				return acum
			}, []);
			return {
				...state,
				videos: [
					...videoArray,
					...state.videos
				]
			}
			break;
		case SELECT_VIDEO:
			return {
				...state,
				selectedVideo: action.videoSelected
			}
			break;
		default:
			return state
	}
}

export default reducerVideo
