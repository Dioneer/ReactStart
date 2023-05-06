import React, { useContext } from "react";
import HeaderUl from "./headerUl";
import HeaderSearch from "./header-search.js"
import Context from '../context.js';
import HeaderInput from "./header-input";
import logo from '../img/skunk.jpg';
import './header.css';
import Burger from "./headerBurger";

function Header() {
	const { classes } = useContext(Context);

	return (
		<header
			className={['header', classes].join(' ')}>
			<div className='container__header'>
				<a className='header__image' href="./"><img alt='logo' src={logo}></img></a>
				<Burger></Burger>
				<div className={["header__main", classes].join(' ')}>
					<HeaderUl></HeaderUl>
				</div>
				<HeaderSearch></HeaderSearch>
			</div>
			<HeaderInput></HeaderInput>
		</header >
	)
}

export default Header;