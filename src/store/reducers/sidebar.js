import { TOGGLE_SIDEBAR, ADD_SIDEBAR, REMOVE_SIDEBAR } from 'store/types';

const initialState = !localStorage.toggleChecked ? true : JSON.parse(localStorage.toggleChecked);

const sidebarReducer = (state = initialState, action) => {
	switch(action.type) {

        case TOGGLE_SIDEBAR:

            return !state

    	case ADD_SIDEBAR:

    		return state = true

    	case REMOVE_SIDEBAR:

    		return state = false

        default: 
        
            return state
    }
}

export default sidebarReducer;