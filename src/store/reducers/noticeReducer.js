import { SHOW_NOTICE, HIDE_NOTICE } from 'store/types';

const intitialState = {visible: false};

const noticeReducer = (state = intitialState, action) => {
	switch(action.type) {

		case SHOW_NOTICE:
			return {
				...action.payload,
				visible: true
			}

		case HIDE_NOTICE: 
			return {
				...state,
				visible: false
			}

		default: 

			return state;
	}
}

export default noticeReducer;