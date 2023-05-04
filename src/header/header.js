import React from "react";
import HeaderUl from "./headerUl";
import HeaderSearch from "./header-saerch.js"

function Header() {
	let [classes, setClasses] = React.useState('');

	function changeBurger(e) {
		if (e.target.closest('.header__burger')) {
			classes ? setClasses(classes = '') : setClasses(classes = 'active')
		}
		if (window.matchMedia("(max-width: 767.98px)").matches) {
			document.body.classList.toggle('active');
		}
	}
	return (
		<header
			className={['header', classes].join(' ')}>
			<div className='container__header'>
				<div
					className={["header__burger", classes].join(' ')}
					onClick={(e) => { changeBurger(e) }}>
					<span className={classes || ''}></span>
				</div>
				<div className="header__main">
					<HeaderUl></HeaderUl>
				</div>
				<div className="header__search">
					<HeaderSearch></HeaderSearch>
				</div>
			</div>
		</header>
	)
}

export default Header;