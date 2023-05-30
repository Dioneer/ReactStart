import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Button from '../UI/button.js';
import Inputs from '../UI/input.js';

function AddToDo({ onCreate }) {
	const [dataValue, setDataValue] = useState('');
	const [value, setValue] = useState('main.addTodo');
	const [classes, setClasses] = useState('');
	const { t } = useTranslation();

	function submitHandler(e) {
		e.preventDefault();
		if (dataValue.trim()) {
			onCreate(dataValue);
			setValue('main.addTodo');
			setDataValue('');
		}
	}

	function focus() {
		setClasses('active');
		setValue('');
	}

	function blur() {
		setValue('main.addTodo');
		setClasses('');
	}

	function clear(e) {
		if (!e.target.closest('.button__big')) {
			setDataValue('');
		} else return;
	}

	function keyBoard(e) {
		if (e.key === "Enter") { setValue(''); setDataValue(''); }
	}

	function changeon(e) {
		setValue(e.target.value); setDataValue(e.target.value)
	}

	useEffect(() => {
		document.body.addEventListener('click', clear)
		return () => {
			document.body.removeEventListener('click', clear)
		}
	})

	return (
		<form
			className='form form__addToDo'
			action="#"
			method="POST"
			onSubmit={submitHandler}>
			<div className='form__addText'>
				<Inputs type={"text"} dataValue={dataValue} value={t(value) || ''} name={"name"} act={classes} focus={focus} blur={blur} onkey={keyBoard} onchange={changeon}></Inputs>
				<Button title={t("main.send")} type={"submit"} aux={"button__big"}></Button>
			</div>
		</form >
	)
}

AddToDo.propTypes = {
	onCreate: PropTypes.func.isRequired,
}

export default AddToDo;