import PropTypes from "prop-types";
import classnames from 'classnames';
import Theme from '../theme/theme.js';

import { ReactComponent as Svg } from '../../img/magnifier_icon-icons.com_67993.svg';

function HeaderSearch({ changeShow, show }) {

	return (
		<div
			className="header__templ"
			onClick={(e) => { changeShow(e) }}>
			<div className="header__theme">
				<Theme></Theme>
			</div>
			<div className={classnames("header__loupe", { active: show })}>
				<Svg ></Svg>
			</div>
		</div >
	)
}

HeaderSearch.propTypes = {
	changeShow: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired
}
export default HeaderSearch;