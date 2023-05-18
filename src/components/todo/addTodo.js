import { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { useTranslation } from "react-i18next";

function AddToDo({ onCreate }) {
	let [dataValue, setDataValue] = useState('');
	let [value, setValue] = useState('main.addTodo');
	let [classes, setClasses] = useState([]);
	const { t } = useTranslation();

	function submitHandler(e) {
		e.preventDefault();
		if (dataValue.trim()) {
			onCreate(dataValue);
			setValue(value = 'main.addTodo');
			setDataValue(dataValue = '');
		}
	}

	function focus() {
		classes.push('active');
		setValue(value = '');
	}

	function blur() {
		setValue(value = 'main.addTodo');
		setClasses(classes = [])
	}

	return (
		<form
			className='form form__addToDo'
			action="#"
			method="POST"
			onSubmit={submitHandler}>
			<div className='form__addText'>
				<input
					type="text"
					data-value={dataValue}
					value={t(value) || ''}
					data-error="ошибка"
					autoComplete="off"
					name="name"
					className={classnames("input", { active: classes[0] })}
					onFocus={() => focus()}
					onBlur={() => blur()}
					onChange={(e) => { setValue(e.target.value); setDataValue(e.target.value) }}
					onKeyUp={(e) => { if (e.key === "Enter") { setValue(value = ''); setDataValue(dataValue = ''); } }}
				/>
				<button className='button button__big' type="submit" >
					<span>{t("main.send")}</span>
				</button>
			</div>
		</form >
	)
}

AddToDo.propTypes = {
	onCreate: PropTypes.func.isRequired,
}

export default AddToDo;