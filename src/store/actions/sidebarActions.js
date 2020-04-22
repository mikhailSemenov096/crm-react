import { TOGGLE_TYPE_SIDEBAR, ADD_SIDEBAR, REMOVE_SIDEBAR } from 'store/types';

export const toggleTypeSidebar = () => {
	return {
		type: TOGGLE_TYPE_SIDEBAR
	}
}

export const addTypeSidebar = (transition) => {
	return {
		type: ADD_SIDEBAR,
		payload: {transition}
	}
}

export const removeTypeSidebar = (transition) => {
	return {
		type: REMOVE_SIDEBAR,
		payload: {transition}
	}
}