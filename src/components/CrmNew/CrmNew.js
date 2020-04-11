import React from 'react';
import './CrmNew.scss';
import PropTypes from 'prop-types';


const CrmNew = ({srcImage, title, description, mixClasses, link}) => {

	return (
		<div className={`crm-new ${mixClasses.crmNew || ''} shadow-box`}>
			<div className={`crm-new__img-wrap ${mixClasses.img || ''}`}>
				<img src={srcImage} alt='' className='crm-new__img'/>
			</div>
			<div className='crm-new__info'>
				<div className='crm-new__title'>{title}</div>
				<div className='crm-new__descr-wrap'>
					<p className='crm-new__descr'>{description}</p>
				</div>
				{link && 
					<div className='crm-new__link-wrap'>
						<a href={link.path} target='_blank' rel='noopener noreferrer' className='crm-new__link detail-link'>{link.descr}</a>
					</div>
				}
			</div>
		</div>
	)
}

CrmNew.propTypes = {
	srcImage: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	mixClasses: PropTypes.object,
	link: PropTypes.object
}

CrmNew.defaultProps = {
	mixClasses: {
		crmNew: 'crm-new_blue',
		img: ''
	}
}

export default CrmNew;