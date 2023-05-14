import classnames from 'classnames';
import PropTypes from "prop-types";

function Burger({ changeShow, classes }) {

	return (
		<div
			className={classnames("header__burger", { 'active': classes })}
			onClick={(e) => { changeShow(e) }}>
			<span className={classes ? 'active' : ''}></span>
		</div>)
}

Burger.propTypes = {
	changeShow: PropTypes.func.isRequired,
	classes: PropTypes.bool.isRequired
}
export default Burger; 