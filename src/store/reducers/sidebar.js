import { TOGGLE_TYPE_SIDEBAR, ADD_SIDEBAR, REMOVE_SIDEBAR } from 'store/types';

const initialState = {
    visible: true,
    sidebarType: !localStorage.toggleChecked ? true : JSON.parse(localStorage.getItem('toggleChecked'))
}

const sidebarReducer = (state = initialState, action) => {
	switch(action.type) {

        case TOGGLE_TYPE_SIDEBAR:

            return {
                ...state,
                sidebarType: !state.sidebarType
            }

    	case ADD_SIDEBAR:

    		return {
                ...state,
                visible: true
            }

    	case REMOVE_SIDEBAR:

    		return {
                ...state,
                visible: false
            }

        default: 
        
            return state
    }
}

export default sidebarReducer;