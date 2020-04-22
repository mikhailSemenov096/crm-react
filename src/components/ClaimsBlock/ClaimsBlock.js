import React from 'react';
import './ClaimsBlock.scss';
import PropTypes from 'prop-types';
import Table from 'rc-table';

const ClaimsBlock = () => {
	const columns = [
	  	{
		    title: '№',
		    dataIndex: 'num',
		    key: '№'
	  	},
	  	{
		    title: 'Дата рег.',
		    dataIndex: 'reg',
		    key: 'reg'
	  	},
	  	{
		    title: 'Адрес',
		    dataIndex: 'address',
		    key: 'address',
	  	},
	  	{
		    title: 'Вид работ',
		    dataIndex: '',
		    key: 'view_work'
	  	},
	];
	return (
		<div className='claims-block shadow-box'>
			<div className="shadow-block__head">
				<div className='main-grid__section-title'>Список заявок</div>

			</div>
			<Table 
				columns={columns}
				tableLayout={'fixed'}
				useFixedHeader={true}
			/>
		</div>
	)
}

export default ClaimsBlock;