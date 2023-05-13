import PropTypes from "prop-types";

function OpportLi({ text }) {

	return (
		<li className="mb-[20%]">
			<a href='./' className=" uppercase text-zinc-800 font-bold text-xl">
				<span className="tracking-wide">{text}</span>
			</a>
		</li>
	)
}

OpportLi.propTypes = {
	text: PropTypes.string.isRequired,
}

export default OpportLi;