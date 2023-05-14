import PropTypes from "prop-types";

function HeaderLi({ text }) {
	return (
		<li className="m-l last:m-0 ">
			<a href="./" className="header__link">{text}</a>
		</li>
	)
}

HeaderLi.propTypes = {
	text: PropTypes.string.isRequired,
}
export default HeaderLi;
