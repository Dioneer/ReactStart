import React from "react";
import PropTypes from "prop-types";

function AddToDo({ onCreate }) {
	let [dataValue, setDataValue] = React.useState('');
	let [value, setValue] = React.useState('Add Todo');
	let [classes, setClasses] = React.useState([]);

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
			className='form'
			action="#"
			method="POST"
			onSubmit={submitHandler}>
			<input
				type="text"
				data-value={dataValue}
				value={value || ''}
				data-error="ошибка"
				autoComplete="off"
				name="name"
				className={["input", classes[0]].join(' ')}
				onFocus={() => focus()}
				onBlur={() => blur()}
				onChange={(e) => { setValue(e.target.value); setDataValue(e.target.value) }} />

			<button className='button button_big' type="submit" >
				<span>Send</span>
			</button>
		</form >
	)
}

AddToDo.propTypes = {
	onCreate: PropTypes.func.isRequired,
}

export default AddToDo;