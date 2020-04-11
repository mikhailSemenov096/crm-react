import { SHOW_NOTICE, HIDE_NOTICE } from 'store/types';

export const showNotice = (type = 'warning', title, descr) => {
	return {
		type: SHOW_NOTICE,
		payload: {type, title, descr}
	}
}

export const hideNotice = () => {
	return {
		type: HIDE_NOTICE
	}
}