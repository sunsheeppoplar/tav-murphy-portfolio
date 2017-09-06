import axios from 'axios';

export const FETCH_VIDEOS = 'fetch_videos';

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