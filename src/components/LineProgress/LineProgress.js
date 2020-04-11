import React, {useState, useEffect} from 'react';
import './LineProgress.scss';
import PropTypes from 'prop-types';
import CountAnimate from 'components/CountAnimate';

const LineProgress = ({description, type, count, maxValue, duration}) => {
	const [widthLine, setWidthLine] = useState(0);
	
	useEffect(() => {
		setWidthLine((count / maxValue) * 100);
	}, [count, maxValue]);

	const stylesLine = {
		width: widthLine + '%',
		transition: `width ${duration}ms ease-out`
	}

	return (
		<div className={`line-progress line-progress_${type}`}>
			{description &&
				<div className="line-progress__descr">
					<span>{description}</span>
				</div>
			}

			<div className="line-progress__line">
				<span className="line-progress__prg-line" style={stylesLine}></span>
				<CountAnimate
					count={count}
					duration={duration}
					className={'line-progress__count'}
				/>
			</div>
		</div>
	)
}

LineProgress.propTypes = {
	description: PropTypes.string,
	type: PropTypes.string,
	count: PropTypes.number,
	maxValue: PropTypes.number,
	duration: PropTypes.number
}

LineProgress.defaultProps = {
	type: 'green',
	duration: 500
}

export default LineProgress;