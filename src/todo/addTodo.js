import React from "react";
import PropTypes from "prop-types";

function AddToDo({ onCreate }) {
	let [value, setValue] = React.useState('Add Todo')

	function submitHandler(e) {
		e.preventDefault();
		console.log(e)
		if (value.trim()) {
			onCreate(value);
			setValue(value = 'Add Todo');
		}
	}
	function focus() {
		setValue(value = '')
	}

	return (
		<form className='form' action="#" method="POST" onSubmit={submitHandler}>
			<input type="text" value={value} data-error="ошибка" autoComplete="off" name="name" className="input" onFocus={() => { focus() }} onChange={(e) => { setValue(e.target.value) }} />

			<button className='button button_big' type="submit" ><span>Send</span></button>
		</form>
	)
}

AddToDo.propTypes = {
	onCreate: PropTypes.func.isRequired,
}

export default AddToDo;