import React, {useState, useEffect} from 'react';
import './CircleProgress.scss';
import PropTypes from 'prop-types';
import CountAnimate from 'components/CountAnimate';

const radius = 40;
const circleFullLength = 2 * Math.PI * radius;

const CircleProgress = ({description, type, count, maxValue, duration}) => {
	const [circumference, setCircumference] = useState(circleFullLength);

	useEffect(() => {
		setCircumference(circleFullLength * (1 - count / maxValue));
	}, [count, maxValue]);

	return (
		<div className={`circle-progress circle-progress_${type}`}>
			<svg viewBox='0 0 90 90' className='circle-progress__svg'>
				<circle r={radius} cx='50%' cy='50%' strokeWidth='10' strokeLinecap='round' className='circle-progress__svg-bg'></circle>
				<circle 
					r={radius} 
					cx='50%' 
					cy='50%' 
					strokeWidth='10' 
					strokeLinecap='round' 
					className='circle-progress__svg-prgs' 
					strokeDashoffset={circumference} 
					strokeDasharray={`${circleFullLength} ${circleFullLength}`}
					style={{transition: `stroke-dashoffset ${duration}ms ease-out`}}
				>
				</circle>
			</svg>
			<div className='circle-progress__count'>
				<CountAnimate
					count={count}
					duration={duration}
					className={'circle-progress__value'}
				/>
				{description && 
					<span className='circle-progress__descr'>{description}</span>
				}
			</div>
		</div>
	)
}

CircleProgress.propTypes = {
	description: PropTypes.string,
	type: PropTypes.string,
	count: PropTypes.number.isRequired,
	maxValue: PropTypes.number.isRequired,
	duration: PropTypes.number
}

CircleProgress.defaultProps = {
	type: 'green',
	duration: 500
}

export default CircleProgress;