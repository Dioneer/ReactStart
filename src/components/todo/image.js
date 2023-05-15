import React from "react";
import PropTypes from "prop-types";
import classnames from 'classnames';

function Image({ text, index, changeInputLi, chCl }) {
	const classes = [];
	if (text.completed) {
		classes.push('active')
	}
	return (
		<React.Fragment>
			<span>{index + 1}</span>
			<img
				src={text.title.replace(/['"]+/g, '')}
				alt='canvac_image'
				className={classnames("image", { active: classes[0] })}
				onClick={() => { changeInputLi(text.id); chCl() }}>
			</img>
		</React.Fragment>
	)
}

Image.propTypes = {
	text: PropTypes.object.isRequired,
	index: PropTypes.number,
	changeInputLi: PropTypes.func.isRequired,
}

export default Image;