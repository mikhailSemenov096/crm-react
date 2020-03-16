import { TOGGLE_SIDEBAR } from 'store/actions/actionTypes';

const initialState = !localStorage.toggleChecked ? true : JSON.parse(localStorage.toggleChecked);

const sidebarReducer = (state = initialState, action) => {
	switch(action.type) {

        case TOGGLE_SIDEBAR:

            return !state

        default: 
        
            return state
    }
}

export default sidebarReducer;