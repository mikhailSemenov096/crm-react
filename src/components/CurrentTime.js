import React, { useState, useEffect } from 'react';

const CurrentTime = ({mixClass, time, date, year}) => {
	const monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

	const [currentTime, setCurrentTime] = useState(new Date());
	useEffect(() => {
		const interval = setInterval(() => setCurrentTime(new Date()), 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<span className={`${mixClass} current-time`}>
			{date && 
				<span className='current-time__date'>
					{currentTime.getDate()} {monthNames[currentTime.getMonth()]}
				</span>
			} 

			{time &&
				<span className='current-time__time'>
					{
						currentTime.toLocaleTimeString(
							[], 
							{
								hour: '2-digit', 
								minute:'2-digit'
							}
						)
					}
				</span>
			}

			{year && 
				<span className='current-time__year'>{currentTime.getFullYear()}</span>
			}
			
		</span>
	)
}

CurrentTime.defaultProps = {
	mixClass: '',
	time: true,
	date: true,
	year: false 
}

export default CurrentTime;