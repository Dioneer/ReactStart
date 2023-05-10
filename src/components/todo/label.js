import React from "react";
import PropTypes from "prop-types";
import classnames from 'classnames';

function Label({ text, index, changeInputLi }) {
	const classes = [];
	if (text.completed) {
		classes.push('active')
		classes.push(true)
	}

	return (
		<label
			htmlFor={['formcheck', text.id].join("-")}
			className={classnames("checkbox__lable", { active: classes[0] })}
			onClick={() => { changeInputLi(text.id); }}>
			<span>{index + 1}</span>{text.title}
		</label>
	)
}

Image.propTypes = {
	text: PropTypes.object.isRequired,
	index: PropTypes.number,
	changeInputLi: PropTypes.func.isRequired,
}

export default Label;