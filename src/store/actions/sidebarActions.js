import { TOGGLE_SIDEBAR, ADD_SIDEBAR, REMOVE_SIDEBAR } from 'store/types';

export const toggleTypeSidebar = () => {
	return {
		type: TOGGLE_SIDEBAR
	}
}

export const addTypeSidebar = () => {
	return {
		type: ADD_SIDEBAR
	}
}

export const removeTypeSidebar = () => {
	return {
		type: REMOVE_SIDEBAR
	}
}