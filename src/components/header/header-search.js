import PropTypes from "prop-types";
import classnames from 'classnames'

import { ReactComponent as Svg } from '../img/magnifier_icon-icons.com_67993.svg';

function HeaderSearch({ changeShow, show }) {

	return (
		<div
			className={classnames("header__loupe", { active: show })}
			onClick={(e) => { changeShow(e) }}>
			<div>
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