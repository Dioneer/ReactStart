import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function HeaderLi({ text }) {
	return (
		<li>
			<Link to="/" className="header__link">{text}</Link>
		</li>
	)
}

HeaderLi.propTypes = {
	text: PropTypes.string.isRequired,
}
export default HeaderLi;
