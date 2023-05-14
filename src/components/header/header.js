import './header.css';
import { useState, useContext } from "react";
import HeaderUl from "./headerUl";
import HeaderSearch from "./header-search.js"
import HeaderInput from "./header-input";
import logo from '../img/skunk.jpg';
import Burger from "./headerBurger";
import classnames from 'classnames';
import Context from '../context.js';

function Header() {
	let { commonClasses, setCommonClasses } = useContext(Context);
	let [classes, setClasses] = useState(false);
	let [show, setShow] = useState(false);

	function changeShow(e) {
		if (e.target.closest('.header__burger')) {
			setClasses(classes => !classes)
			if (!classes) { setCommonClasses(commonClasses = true) } else { setCommonClasses(commonClasses = false) }
		}
		if (e.target.closest('.header__loupe')) {
			setShow(show => !show)
		}
	}

	return (
		<header
			className={classnames('header', { 'active': classes })}>
			<div className='container__header'>
				<div className='header__image'>
					<img alt='logo' src={logo}
						className='absolute top-0 left-0 w-100 h-100 object-cover object-bottom rounded-md'></img></div>
				<Burger changeShow={changeShow} classes={classes}></Burger>
				<div className={classnames("header__main", { "active": classes })}>
					<HeaderUl></HeaderUl>
				</div>
				<HeaderSearch changeShow={changeShow} show={show}></HeaderSearch>
			</div>
			<HeaderInput show={show}></HeaderInput>
		</header >
	)

}
export default Header;