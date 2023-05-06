import PropTypes from "prop-types";

function ToDoLi({ text, index, changeInputLi, removeLi, submit }) {
	const classes = [];
	if (text.completed) {
		classes.push('active')
		classes.push(true)
	}
	return (
		<li>
			<div className={["checkbox", classes[0]].join(' ')} >
				<label
					htmlFor={['formcheck', text.id].join("-")}
					className={["checkbox__lable", classes[0]].join(' ')}
					onClick={() => { changeInputLi(text.id); }}>
					<span>{index + 1}</span>{text.title}
				</label>
				<input
					defaultChecked={classes[1] || false}
					type="checkbox"
					name={['checkexe', text.id].join('_')}
					id={['formcheck', text.id].join("-")}
					className="checkbox__input"
					value={''} />
			</div>
			<button
				className="button"
				type="submit"
				onClick={(e) => { removeLi(text.id); submit(e) }}>X
			</button>
		</li>
	)
}

ToDoLi.propTypes = {
	text: PropTypes.object.isRequired,
	index: PropTypes.number,
	changeInputLi: PropTypes.func.isRequired,
}

export default ToDoLi;