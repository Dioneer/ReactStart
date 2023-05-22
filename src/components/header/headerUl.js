import HeaderLi from "./headerLi";
import OpportUl from "../opportunity/opporUl.js";
import { useTranslation } from "react-i18next";
import classnames from "classnames";
import PropTypes from "prop-types";

function HeaderUl({ classes }) {
	const { t } = useTranslation();

	return (
		<div className={classnames("header__main", { "active": classes })}>
			<ul className="header__list">
				{t('main.headerList', { returnObjects: true }).map((li, i) => {
					return <HeaderLi text={li}
						key={i}>
					</HeaderLi>
				})}
				<div className="header__addOpport"> <OpportUl></OpportUl></div>
			</ul>
		</div >
	)
}

HeaderUl.prototype = {
	classes: PropTypes.string,
}

export default HeaderUl;