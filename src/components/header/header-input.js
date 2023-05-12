import { useState } from "react";
import PropTypes from "prop-types";
import classnames from 'classnames'

function HeaderInput({ show }) {
	let [value, setValue] = useState('Search');
	let [searchClass, setSearchClass] = useState('');

	function submitHandler(e) {
		e.preventDefault();
		if (searchClass.trim()) {
			setValue(value = 'Search');
			setSearchClass(setSearchClass = '');
		}
	}

	function focus() {
		setValue(value = '');
	}

	function blur() {
		setValue(value = 'Search');
	}
	return (
		<div className={classnames('header__showSearch relative max-w-full w-100 m-center right-[110%] h-0 rotate-0 ransition-burg duration-500 delay-0 ease-linear', { 'active': show })}>
			<form
				className='form form__search mt-3 max-w-100'
				action="#"
				method="POST"
				onSubmit={submitHandler}>
				<input
					type="text"
					data-value={searchClass}
					value={value || ''}
					autoComplete="off"
					name="search"
					className={classnames(["input", "input__search"], { active: show })}
					onFocus={() => focus()}
					onBlur={() => blur()}
					onChange={(e) => { setValue(e.target.value); setSearchClass(e.target.value) }} />

				<button className='button button__search' type="submit" >
					<span>Search</span>
				</button>
			</form >
		</div>)
}

HeaderInput.propTypes = {
	show: PropTypes.bool.isRequired
}
export default HeaderInput;