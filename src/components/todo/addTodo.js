import { useState } from "react";
import PropTypes from "prop-types";
import Canvas from '../canvas/canvas.js';
import classnames from "classnames";

function AddToDo({ onCreate }) {
	let [dataValue, setDataValue] = useState('');
	let [value, setValue] = useState('Add Todo');
	let [classes, setClasses] = useState([]);

	function submitHandler(e) {
		e.preventDefault();
		if (dataValue.trim()) {
			onCreate(dataValue);
			setValue(value = 'Add Todo');
			setDataValue(dataValue = '');
		}
	}

	function focus() {
		classes.push('active');
		setValue(value = '');
	}

	function blur() {
		setValue(value = 'Add Todo');
		setClasses(classes = [])
	}

	return (
		<form
			className='form form__addToDo'
			action="#"
			method="POST"
			onSubmit={submitHandler}>
			<div className='form__addText canvas__prim'>
				<input
					type="text"
					data-value={dataValue}
					value={value || ''}
					data-error="ошибка"
					autoComplete="off"
					name="name"
					className={classnames("input", { active: classes[0] })}
					onFocus={() => focus()}
					onBlur={() => blur()}
					onChange={(e) => { setValue(e.target.value); setDataValue(e.target.value) }} />

				<button className='button button__big' type="submit" >
					<span>Send</span>
				</button>
			</div>
			<div
				className='form__addText canvas__add'>
				<Canvas />
			</div>
		</form >
	)
}

AddToDo.propTypes = {
	onCreate: PropTypes.func.isRequired,
}

export default AddToDo;