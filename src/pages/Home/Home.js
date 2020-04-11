import React, {useState, useEffect} from 'react';
import './Home.scss';
import classNames from 'classnames';
import ClaimCount from 'components/ClaimCount/ClaimCount';
import Progress from 'components/Progress/Progress';
import CrmNew from 'components/CrmNew/CrmNew';
import Debtors from 'components/Debtors/Debtors';
import News from 'components/News/News';

import CrmNewDebt from 'images/debt.png';
import CrmNewApp from 'images/mobile-app.png';

export const Home = () => {

	const claimsCountState = [
		{type: 'month', title: 'За месяц', smallText: 'заявок', count: 10},
		{type: 'day', title: 'За день', smallText: 'заявок', count: 16},
		{type: 'work', title: 'В работе', smallText: 'заявки', count: 100},
		{type: 'overdue', title: 'Просроченные', smallText: 'просроченные заявки', count: 34},
	]
	const [claimsCount, setClaimsCount] = useState(claimsCountState);

	const [debts, setDebts] = useState([
		{
			debtor_id: 724,
			flat: 8469,
			debt: '3945.37',
			fio: 'Ганеев Марат Закеевич',
			address: 'Уфа, ул. Айская 63, кв. 5'
		},
		{
			debtor_id: 721,
			flat: 8614,
			debt: '987.20',
			fio: 'ГАБИДУЛЛИН Р.Х.',
			address: 'Уфа, ул. Леваневского 35'
		},
		{
			debtor_id: 724,
			flat: 8469,
			debt: '3945.37',
			fio: 'Ганеев Марат Закеевич',
			address: 'Уфа, ул. Айская 63, кв. 5'
		},
		{
			debtor_id: 721,
			flat: 8614,
			debt: '987.20',
			fio: 'ГАБИДУЛЛИН Р.Х.',
			address: 'Уфа, ул. Леваневского 35'
		},
		{
			debtor_id: 724,
			flat: 8469,
			debt: '3945.37',
			fio: 'Ганеев Марат Закеевич',
			address: 'Уфа, ул. Айская 63, кв. 5'
		},
		{
			debtor_id: 721,
			flat: 8614,
			debt: '987.20',
			fio: 'ГАБИДУЛЛИН Р.Х.',
			address: 'Уфа, ул. Леваневского 35'
		},
		{
			debtor_id: 724,
			flat: 8469,
			debt: '3945.37',
			fio: 'Ганеев Марат Закеевич',
			address: 'Уфа, ул. Айская 63, кв. 5'
		},
		{
			debtor_id: 721,
			flat: 8614,
			debt: '987.20',
			fio: 'ГАБИДУЛЛИН Р.Х.',
			address: 'Уфа, ул. Леваневского 35'
		}
	])

	const [news, setNews] = useState([
		{
            datetime: '15 марта 2019, 10:00',
            title: 'Поздравление главы Минстроя',
            description: 'Поздравление главы Минстроя России Владимира Якушева с Днем работников жилищно-коммунального хозяйства',
            link: 'http://www.minstroyrf.ru/press/pozdravlenie-glavy-minstroya-rossii-vladimira-yakusheva-s-dnem-rabotnikov-zhilishchno-kommunalnogo-kh/',
            img: 'https://www.minstroyrf.ru/upload/resize_cache/iblock/aa1/370_250_2/23D6117A_4EAF_4B0B_9DC2_6DE9EB054486.jpeg'
        },
        {
            datetime: '14 марта 2019, 19:00',
            title: 'Минстрой России и РСПП',
            description: 'Минстрой России и РСПП подписали соглашение о сотрудничестве',
            link: 'http://www.minstroyrf.ru/press/minstroy-rossii-i-rspp-podpisali-soglashenie-o-sotrudnichestve/',
            img: 'https://www.minstroyrf.ru/upload/resize_cache/iblock/9d1/370_250_2/F75BE93B_C3DF_47DE_8CD0_FBA96BF1D562.jpeg'
        },
        {
            datetime: '14 марта 2019, 16:15',
            title: 'Международный форум Умных городов',
            description: 'В Калуге стартовал Международный форум Умных городов',
            link: 'http://www.minstroyrf.ru/press/v-kaluge-startoval-mezhdunarodnyy-forum-umnykh-gorodov/',
            img: 'https://www.minstroyrf.ru/upload/resize_cache/iblock/335/370_250_2/IMG_1276_14_03_19_13_46.JPG'
        },

        {
            datetime: '14 марта 2019, 16:15',
            title: 'Международный форум Умных городов',
            description: 'В Калуге стартовал Международный форум Умных городов',
            link: 'http://www.minstroyrf.ru/press/v-kaluge-startoval-mezhdunarodnyy-forum-umnykh-gorodov/',
            img: 'https://www.minstroyrf.ru/upload/resize_cache/iblock/335/370_250_2/IMG_1276_14_03_19_13_46.JPG'
        }
	])

	const [circlesList, setCirclesList] = useState([
		{descr: 'мин', type: 'green', count: 10},
		{descr: 'мин', type: 'blue', count: 17},
		{descr: 'мин', type: 'red', count: 98}
	]);

	const [linesList, setLinesList] = useState([
		{descr: 'Входящие', type: 'green', count: 10},
		{descr: 'Исходящие', type: 'blue', count: 17},
		{descr: 'Пропущенные', type: 'red', count: 98}
	]);

	return (
		<div className='main-content__page-home'>
		
			<div className='claims-count-list'>
				{
					claimsCount.map((claim, index) => 
						<ClaimCount
							type={claim.type}
							title={claim.title}
							smallText={claim.smallText}
							count={claim.count}
							key={`${claim.type}-${index}`}
						/>
					)
				}
			</div>

			<Progress 
				title={'Звонки'}
				mixClass={'bells-progress'}
				linesList={linesList}
			/>

			<CrmNew 
				srcImage={CrmNewDebt}
				title={'Работа с дебиторской задолженностью'}
				description={`Эффективное решение для работы с должниками ЖКХ. Снижает задолженность на 50%!`}
			/>

			<CrmNew 
				srcImage={CrmNewApp}
				title={'Отличная новость!'}
				description={
					`Мы запустили мобильное приложение для сотрудников и руководителей УО и ТСЖ. 
					Уже сейчас с любого Android-устройства можно создавать и получать уведомления о новой заявке.`
				}
				mixClasses={{
					crmNew: 'crm-new_two crm-new_violet',
					img: 'crm-new__img-wrap_bottom'
				}}
				link={{
					path: 'https://play.google.com/store/apps/details?id=com.bloknot',
					descr: 'Скачать'
				}}
			/>

			<Debtors debtorsList={debts} />
			<News newsList={news} />
			<div className="claims">
				<Debtors debtorsList={debts} />
			</div>
			
		</div>
	)
}