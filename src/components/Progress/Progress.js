import React from 'react';
import './Progress.scss';
import PropTypes from 'prop-types';
import LineProgress from 'components/LineProgress/LineProgress';
import CircleProgress from 'components/CircleProgress/CircleProgress';

const Progress = ({title, mixClass, linesList, circlesList}) => {
	return (
		<div className={`${mixClass} progress shadow-box`}>
			<h2 className='main-grid__section-title'>{title}</h2>
			<div className='progress__inner'>
				{linesList && 
					<div className='progress__list progress__list_lines'>
						{linesList.map((item, index) => 
							<div className='progress__item' key={`progress-${index}`}>
								<LineProgress 
									description={item.descr}
									type={item.type}
									count={item.count}
									maxValue={linesList.reduce((sum, current) => sum + current.count, 0)}
									duration={1500}
								/>
							</div>
					 	)}
					</div>
				}

				{circlesList && 
					<div className='progress__list progress__list_circles'>
						{circlesList.map((item, index) =>
							<div className='progress__col' key={`progress-circle-${index}`}>
								<div className='progress__item'>
									<CircleProgress 
										description={item.descr}
										type={item.type}
										count={item.count}
										maxValue={circlesList.reduce((sum, current) => sum + current.count, 0)}
										duration={1500}
									/>
								</div>
							</div>
					 	)}
					</div>
				}
			</div>
		</div>
	)
}

Progress.propTypes = {
	title: PropTypes.string,
	linesList: PropTypes.array,
	circlesList: PropTypes.array
}

Progress.defaultProps = {
	title: 'Звонки',
	mixClass: ''
}

export default Progress;