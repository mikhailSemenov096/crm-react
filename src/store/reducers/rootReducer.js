import { combineReducers } from 'redux';
import sidebarReducer from './sidebar';
import noticeReducer from './noticeReducer';

const rootReducer = combineReducers({
	sidebarReducer,
	noticeReducer
});

export default rootReducer;