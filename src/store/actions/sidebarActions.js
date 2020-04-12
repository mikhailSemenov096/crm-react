import { TOGGLE_TYPE_SIDEBAR, ADD_SIDEBAR, REMOVE_SIDEBAR } from 'store/types';

export const toggleTypeSidebar = () => {
	return {
		type: TOGGLE_TYPE_SIDEBAR
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