import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Notice.scss';
import { CSSTransition } from 'react-transition-group';
import { hideNotice } from 'store/actions/noticeActions';

const Notice = () => {
	const noticeState = useSelector(state => state.noticeReducer);
	const dispatch = useDispatch();

	useEffect(()=> {
		let timeout;

		if (noticeState.visible) {
			timeout = setTimeout(() => dispatch(hideNotice()), 1000)
		}

		return () => clearTimeout(timeout);

	}, [dispatch, noticeState]);

	return (
		<CSSTransition
			in={noticeState.visible}
			timeout={300}
			classNames='notice'
			mountOnEnter
			unmountOnExit
		>
			<div className={`notice notice_${noticeState.type}`}>
				<span className='notice__close-btn' onClick={() => dispatch(hideNotice())}></span>
				<div className='notice__title'>{noticeState.title}</div>
				<div className='notice__descr'>{noticeState.descr}</div>
			</div>
		</CSSTransition>
	)
}

Notice.defaultProps = {
	type: 'success'
}

export default Notice;