import React from 'react';
import './Debtors.scss';
import PropTypes from 'prop-types';
import useScrollingElem from 'hooks/useScrollingElem';

const Debtors = ({debtorsList}) => {
	const reg = /(\d)(?=(\d{3})+(\D|$))/g;
	const debtSum = debtorsList.reduce((sum, current) => +current.debt + sum, 0);

	const [refElem, isScrolling] = useScrollingElem(null);

	return (
		<div className='debtors shadow-box'>
			<div className='main-grid__section-title'>Задолжености</div>
			<div className='debtors__item debtors__item-all'>
				<div className='debtors__quantity'>
					<div className='debtors__item-title'>Должников</div>
					<div className='debtors__num'>{debtorsList.length}</div>
				</div>

				<div className='debtors__sum'>
					<div className='debtors__item-title'>На сумму</div>
					<div className='debtors__num'>
					{debtSum.toFixed(2).replace(reg, '$1 ')}
					&nbsp;<span className='rub'>₽</span></div>
				</div>
			</div>

			<div className={`debtors__list ${isScrolling ? 'is-scrolling' : ''}`} ref={refElem}>
				{debtorsList.map((debtor, index) => 
					<div className='debtors__item' key={`debtors-${index}`}>
						<div className='debtors__quantity'>
							<div className='debtors__item-title'>{debtor.fio}</div>
							<div className='debtors__adress'>{debtor.address}</div>
						</div>

						<div className='debtors__sum'>
							<div className='debtors__num'>
								{debtor.debt.replace(reg, '$1 ')}
								&nbsp;<span className='rub'>₽</span>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

Debtors.propTypes = {
	debtorsList: PropTypes.array
}

export default Debtors;