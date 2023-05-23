import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

function OpportLi({ text }) {

	return (
		<li>
			<Link to='/'>
				<span className="tracking-wide">{text}</span>
			</Link>
		</li>
	)
}

OpportLi.propTypes = {
	text: PropTypes.string.isRequired,
}

export default OpportLi;