import React, { useContext } from "react";
import Context from '../context.js';


function HeaderInput() {
	const { show } = useContext(Context);
	let [value, setValue] = React.useState('Search');
	let [searchClass, setSearchClass] = React.useState([]);
	let [active, setActive] = React.useState('');

	function submitHandler(e) {
		e.preventDefault();
		if (searchClass.trim()) {
			setValue(value = 'Search');
			setSearchClass(setSearchClass = '');
		}
	}
	function focus() {
		setActive('active');
		setValue(value = '');
	}

	function blur() {
		setValue(value = 'Search');
		setActive(active = '')
	}
	return (<div className={['header__showSearch', show].join(' ')}>
		<form
			className='form form__search'
			action="#"
			method="POST"
			onSubmit={submitHandler}>
			<input
				type="text"
				data-value={searchClass}
				value={value || ''}
				autoComplete="off"
				name="search"
				className={["input", "input__search", active].join(' ')}
				onFocus={() => focus()}
				onBlur={() => blur()}
				onChange={(e) => { setValue(e.target.value); setSearchClass(e.target.value) }} />

			<button className='button button_big' type="submit" >
				<span>Search</span>
			</button>
		</form >
	</div>)
}

export default HeaderInput;