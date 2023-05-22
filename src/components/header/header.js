import './header.css';
import { useState } from "react";
import HeaderUl from "./headerUl";
import HeaderSearch from "./header-search.js"
import HeaderInputSearch from "./header-input-search";
import Burger from "./headerBurger";
import classnames from 'classnames';
import { useHeaderContext } from '../context.js';
import HeaderLogo from './header-logo';

function Header() {
	const { setCommonClasses } = useHeaderContext();
	const [classes, setClasses] = useState(false);
	const [show, setShow] = useState(false);

	function changeShow(e) {
		if (e.target.closest('.header__burger')) {
			setClasses(classes => !classes)
			if (!classes) { setCommonClasses(true) } else { setCommonClasses(false) }
		}
		if (e.target.closest('.header__loupe')) {
			setShow(show => !show)
		}
	}

	return (
		<header
			className={classnames('header', { 'active': classes })}>
			<div className='container__header'>
				<HeaderLogo></HeaderLogo>
				<Burger changeShow={changeShow} classes={classes}></Burger>
				<HeaderUl classes={classes}></HeaderUl>
				<HeaderSearch changeShow={changeShow} show={show}></HeaderSearch>
			</div>
			<HeaderInputSearch show={show}></HeaderInputSearch>
		</header >
	)

}
export default Header;