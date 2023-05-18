import OpportLi from './opporLi.js';
import '../opportunity/opportunity.css';
import { useTranslation } from "react-i18next";

function OppurtUl() {
	const { t } = useTranslation();

	return (
		< ul className="aside__list" >
			{
				t('main.opportunityList', { returnObjects: true }).map((li, i) => {
					return <OpportLi
						key={i}
						text={li}
					></OpportLi>
				})
			}
		</ ul>
	)
}

export default OppurtUl;