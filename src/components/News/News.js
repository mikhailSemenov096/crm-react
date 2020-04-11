import React from 'react';
import './News.scss';
import PropTypes from 'prop-types';
import useScrollingElem from 'hooks/useScrollingElem';

const News = ({newsList}) => {
	const [refElem, isScrolling] = useScrollingElem(null);

	return (
		<div className="news shadow-box">
			<div className="main-grid__section-title">Новости</div>
			<div className={`news__list ${isScrolling ? 'is-scrolling' : ''}`} ref={refElem}>
				{newsList.map((newItem, index) => 
					<div className="news__item" key={`new-${index}`}>
						<div className="news__img-wrap">
							<img src={newItem.img} alt={newItem.title} className="news__img"/>
						</div>

						<div className="news__info">
							<div className="news__date">{newItem.datetime}</div>
							<div className="news__title">{newItem.title}</div>
							<p className="news__descr">{newItem.description}</p>
							<div className="news__link-wrap">
								<a href={newItem.link} className="news__link detail-link">Подробнее</a>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

News.propTypes = {
	newsList: PropTypes.array.isRequired
}

export default News;