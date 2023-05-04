import React from "react";
import PropTypes from "prop-types";

function HeaderLi({ text }) {
	return (
		<li>
			<a href="#" className="header__link">{text}</a>
		</li>
	)
}

HeaderLi.propTypes = {
	text: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default HeaderLi;