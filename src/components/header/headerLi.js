import React from "react";
import PropTypes from "prop-types";


function HeaderLi({ text }) {
	return (
		<li className="m-l last:m-0 ">
			<a href="./" className="header__link color-zinc-800 inline-block uppercase tracking-wide leading-7 relative before:content-[''] before:absolute before:bottom-0 before:left-[50%] before:w-0 before:h-px before:bg-zinc-800 before:transition-burg before:duration-300 before:ease-in before:delay-0 hover:before:left-0 hover:before:w-100">{text}</a>
		</li>
	)
}

HeaderLi.propTypes = {
	text: PropTypes.string.isRequired,
}
export default HeaderLi;
