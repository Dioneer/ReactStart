import { useState } from "react";
import PropTypes from "prop-types";
import classnames from 'classnames'
import { useTranslation } from "react-i18next";
import Button from '../UI/button.js';
import { FullInputs } from "../UI/input.js";

function HeaderInput({ show }) {
	const [value, setValue] = useState('main.search');
	const [searchClass, setSearchClass] = useState('');
	const { t } = useTranslation();

	function submitHandler(e) {
		e.preventDefault();
		if (searchClass.trim()) {
			setValue('main.search');
			setSearchClass('');
		}
	}
	function changeOn(e) {
		setValue(e.target.value); setSearchClass(e.target.value)
	}

	function focus() {
		setValue('');
	}

	function keyBoard(e) {
		if (e.key === "Enter") { setValue(''); setSearchClass('') }
	}

	function blur() {
		setValue('main.search');
		setSearchClass('');
	}
	return (
		<div className={classnames('header__showSearch', { 'active': show })}>
			<form
				className='form form__search'
				action="#"
				method="POST"
				onSubmit={submitHandler}>
				<FullInputs type={"text"} dataValue={searchClass} value={t(value) || ''} name={"search"} act={show} focus={focus} blur={blur} onchange={changeOn} onkey={keyBoard}></FullInputs>
				<Button aux={"button__search"} type={"submit"} title={t("main.search")}></Button>
			</form >
		</div>)
}

HeaderInput.propTypes = {
	show: PropTypes.bool.isRequired
}
export default HeaderInput;