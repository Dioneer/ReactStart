import PropTypes from "prop-types";

function OpportLi({ text }) {

	return (
		<li>
			<a href='./'>
				<span className="tracking-wide">{text}</span>
			</a>
		</li>
	)
}

OpportLi.propTypes = {
	text: PropTypes.string.isRequired,
}

export default OpportLi;