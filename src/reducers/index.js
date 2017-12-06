import { combineReducers } from 'redux';
import MobileNavReducer from './reducer_mobile_nav';
import VideosReducer from './reducer_videos';

const rootReducer = combineReducers({
	videos: VideosReducer,
	mobileNav: MobileNavReducer
});

export default rootReducer;