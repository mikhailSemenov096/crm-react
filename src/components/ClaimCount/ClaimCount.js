import React from 'react';
import './ClaimCount.scss';
import HoverLamp from 'components/HoverLamp/HoverLamp';
import CountAnimate from 'components/CountAnimate';

const ClaimCount = (
	{
		type, 
		title, 
		smallText, 
		count, 
		onMouseDown, 
		onMouseUp, 
		onDragStart, 
		styles}
	) => {

	return (
		<HoverLamp
			onMouseDown={onMouseDown}
			onDragStart={onDragStart}
	 	>
			<div className={`claim-count claim-count_${type}`} style={styles}>
				<span className="claim-count__dots"></span>
				<div className="claim-count__title">{title}</div>
				<div className="claim-count__small-text">{smallText}</div>
				<div className="claim-count__counter">
					<CountAnimate 
						count={count}
						duration={700}
						timing={(timeFraction) => timeFraction}
					/>
				</div>
			</div>
		</HoverLamp>
	)
}

ClaimCount.defaultProps = {
	type: 'month',
	title: 'За месяц',
	smallText: 'заявок',
	count: 0
}

export default ClaimCount;