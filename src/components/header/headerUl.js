import HeaderLi from "./headerLi";
import OpportUl from "../opportunity/opporUl.js";
import { useTranslation } from "react-i18next";

function HeaderUl() {
	const { t } = useTranslation();

	return (
		<ul className="header__list">
			{t('main.headerList', { returnObjects: true }).map((li, i) => {
				return <HeaderLi text={li}
					key={i}>
				</HeaderLi>
			})}
			<div className="header__addOpport"> <OpportUl></OpportUl></div>
		</ul>
	)
}
export default HeaderUl;