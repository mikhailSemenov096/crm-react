import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Slider from '@material-ui/core/Slider';

import styles from './CustomAudio.module.scss';

import IconSvg from 'components/IconSvg';

const CustomAudio = ({src}) => {
	const [play, setPlay] = useState(false);
	const [time, setTime] = useState({
		current: '00:00:00',
		all: '00:00:00'
	})
	const [value, setValue] = useState(0)

	const controlClickHandler = () => {
		setPlay(!play);
		setValue(value + 10)
	}

	const sliderHandleChange = (event, newValue) => {

		console.log(event)
		setValue(newValue);
	};

	return (
		<div className={styles.wrapper}>
			<button className={styles.controlBtn} onClick={controlClickHandler}>
				<IconSvg icon={!play ? 'icon-play' : 'icon-pause'} />
			</button>

			<div className={styles.time}>{time.current} / {time.all}</div>
			<div className={styles.controlLine}>
				<Slider 
					value={value}
					onChange={sliderHandleChange}
				/>
			</div>

		</div>
	)
}	

CustomAudio.propTypes = {
	src: PropTypes.string.isRequired
}

CustomAudio.defaultProps = {
	
}

export default CustomAudio;