import PropTypes from "prop-types";

function ToDoLi({ text, index, changeInputLi, removeLi }) {
	const classes = [];
	if (text.completed) {
		classes.push('active')
	}
	return (
		<li>
			<div className={["checkbox", classes[0]].join(' ')} >
				<input checked={text.completed} type="checkbox" id={['formcheck', text.id].join("")} data-error="ошибка" autoComplete="off" name="checkyourself" className="checkbox__input req" onChange={() => { changeInputLi(text.id); }} />
				<label htmlFor={['formcheck', text.id].join("")} className="checkbox__lable"><span>{index + 1}</span>{text.title}</label>
			</div>
			<button className="button" type="submit" onClick={() => { removeLi(text.id) }}>X</button>
		</li>
	)
}

ToDoLi.propTypes = {
	text: PropTypes.object.isRequired,
	index: PropTypes.number,
	changeInputLi: PropTypes.func.isRequired,
}

export default ToDoLi;