import classnames from 'classnames';
import PropTypes from "prop-types";

function Burger({ changeShow, classes }) {

	return (
		<div
			className={classnames("header__burger hidden before:absolute before:block before:left-0 before:w-100 before:h-[2px] before:bg-zinc-800 before:transition-burg before:duration-300 before:delay-0 before:ease-linear before:top-0 after:absolute after:block after:left-0 after:w-100 after:h-[2px] after:bg-zinc-800 after:transition-burg after:duration-300 after:delay-0 after:ease-linear after:bottom-0", { 'active before:top-[9px] before:rotate-45 after:top-[9px] after:rotate-[-45deg]': classes })}
			onClick={(e) => { changeShow(e) }}>
			<span className={classes ? 'active scale-0' : 'absolute block left-0 w-100 h-[2px] bg-zinc-800 transition-burg duration-300 delay-0 ease-linear top-[9px]'}></span>
		</div>)
}

Burger.propTypes = {
	changeShow: PropTypes.func.isRequired,
	classes: PropTypes.bool.isRequired
}
export default Burger; 