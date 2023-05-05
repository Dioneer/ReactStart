import React, { useContext } from "react";
import HeaderUl from "./headerUl";
import HeaderSearch from "./header-saerch.js"
import Context from '../context.js';
import HeaderInput from "./header-input";

function Header() {
	const { changeClass, classes } = useContext(Context);

	return (
		<header
			className={['header', classes].join(' ')}>
			<div className='container container__header'>
				<div
					className={["header__burger", classes].join(' ')}
					onClick={(e) => { changeClass(e) }}>
					<span className={classes || ''}></span>
				</div>
				<div className={["header__main", classes].join(' ')}>
					<HeaderUl></HeaderUl>
				</div>
				<div className="header__search">
					<HeaderSearch></HeaderSearch>
				</div>
			</div>
			<HeaderInput></HeaderInput>
		</header >
	)
}

export default Header;