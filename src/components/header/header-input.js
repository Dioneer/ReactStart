import { useState } from "react";
import PropTypes from "prop-types";
import classnames from 'classnames'
import { useTranslation } from "react-i18next";

function HeaderInput({ show }) {
	let [value, setValue] = useState('main.search');
	let [searchClass, setSearchClass] = useState('');
	const { t } = useTranslation();

	function submitHandler(e) {
		e.preventDefault();
		if (searchClass.trim()) {
			setValue(value = 'main.search');
			setSearchClass(setSearchClass = '');
		}
	}

	function focus() {
		setValue(value = '');
	}

	function blur() {
		setValue(value = 'main.search');
	}
	return (
		<div className={classnames('header__showSearch', { 'active': show })}>
			<form
				className='form form__search'
				action="#"
				method="POST"
				onSubmit={submitHandler}>
				<input
					type="text"
					data-value={searchClass}
					value={t(value) || ''}
					autoComplete="off"
					name="search"
					className={classnames(["input", "input__search"], { active: show })}
					onFocus={() => focus()}
					onBlur={() => blur()}
					onChange={(e) => { setValue(e.target.value); setSearchClass(e.target.value) }} />

				<button className='button button__search' type="submit" >
					<span>{t("main.search")}</span>
				</button>
			</form >
		</div>)
}

HeaderInput.propTypes = {
	show: PropTypes.bool.isRequired
}
export default HeaderInput;