import React, { useContext } from "react";
import HeaderUl from "./headerUl";
import HeaderSearch from "./header-saerch.js"
import Context from '../context.js';

function Header() {
	const { changeBurger, classes } = useContext(Context);
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
	return (
		<header
			className={['header', classes].join(' ')}>
			<div className='container container__header'>
				<div
					className={["header__burger", classes].join(' ')}
					onClick={(e) => { changeBurger(e) }}>
					<span className={classes || ''}></span>
				</div>
				<div className={["header__main", classes].join(' ')}>
					<HeaderUl></HeaderUl>
				</div>
				<div className="header__search">
					<HeaderSearch></HeaderSearch>
				</div>
			</div>
			<div className={'header__showSearch'}>
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
			</div>
		</header >
	)
}

export default Header;