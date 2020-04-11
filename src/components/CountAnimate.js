import React, {useState, useEffect} from 'react';
import usePrevious from 'hooks/usePrevious';
import PropTypes from 'prop-types';
import {animate} from 'helpers';

const CountAnimate = ({ count, duration, timing, className }) => {
	const [countAnimate, setCountAnimate] = useState(0);
	const prevCount = usePrevious(count) || 0;

	useEffect(() => {
		let unmounted = false;

		animate({
			duration: duration,
			timing: timeFraction => timing(timeFraction),
			draw: progress => {
				const resultCount = (count - prevCount) * progress + prevCount;

				if (!unmounted) setCountAnimate(Math.ceil(resultCount));
			}
		});

		return () => unmounted = true;
	}, [count]);

	return <span className={className}>{countAnimate}</span>
}

CountAnimate.propTypes = {
	count: PropTypes.number.isRequired,
	duration: PropTypes.number.isRequired
}

CountAnimate.defaultProps = {
	duration: 500,
	timing: (timeFraction) => 1 - Math.pow(1 - timeFraction, 2)
}

export default CountAnimate;