import PropTypes from "prop-types";
import './error.css';

function Error({ error }) {
	return (
		<div className="error">{error}</div>
	)
}
Error.propTypes = {
	error: PropTypes.string.isRequired,
}

export default Error;