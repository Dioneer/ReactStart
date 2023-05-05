import React, { useContext } from "react";
import HeaderUl from "./headerUl";
import HeaderSearch from "./header-saerch.js"
import Context from '../context.js';

function Header() {
	const { changeBurger, classes } = useContext(Context);

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
		</header >
	)
}

export default Header;