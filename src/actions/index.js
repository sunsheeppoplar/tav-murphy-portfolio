import axios from 'axios';

export const FETCH_VIDEOS = 'fetch_videos';
export const SELECT_VIDEO = 'select_video';
export const SELECT_MOBILE_NAV = 'select_mobile_nav';

const ROOT_URL = 'https://api.vimeo.com/users/tavmurphy/videos'
const MODIFIER = '?sort=modified_time'
const TOKEN = '&access_token=60430fe4ed2d7795442b577cd0fcdd4b'

export function fetchVideos() {
	const request = axios.get(`${ROOT_URL}${MODIFIER}${TOKEN}`);

	return {
		type: FETCH_VIDEOS,
		payload: request
	};
}

export function selectMenu() {
	return {
		type: SELECT_MOBILE_NAV
	}
}

export function selectVideo(video) {
	return {
		type: SELECT_VIDEO,
		videoSelected: video
	}
}