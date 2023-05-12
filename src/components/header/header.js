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
			className={classnames('header flex min-h-[50px] flex-col justify-center px-[1%] py-2.5 bg-amber-500', { 'active before:fixed before:top-0 before:left-0 before:w-100 before:min-h-[50px] before:bg-amber-500 before:z-[3] before:transition all ease delay-0': classes })}>
			<div className='container__header flex items-center  m-center w-100 max-w-full'>
				<div className='header__image inline-block h-12 w-16 relative hover:animate-drug'>
					<img alt='logo' src={logo}
						className='absolute top-0 left-0 w-100 h-100 object-cover object-bottom rounded-md'></img></div>
				<Burger changeShow={changeShow} classes={classes}></Burger>
				<div className={classnames("header__main flex-auto px-[7%] py-0 relative z-[3] transition-burg ease-ease-out-cur duration-700 delay-0", { "active": classes })}>
					<HeaderUl></HeaderUl>
				</div>
				<HeaderSearch changeShow={changeShow} show={show}></HeaderSearch>
			</div>
			<HeaderInput show={show}></HeaderInput>
		</header >
	)

}
export default Header;