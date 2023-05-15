import PropTypes from "prop-types";

function Error({ error }) {
	return (
		<div className=" text-center text-red-700 font-bold">{error}</div>
	)
}
Error.propTypes = {
	error: PropTypes.string.isRequired,
}

export default Error;