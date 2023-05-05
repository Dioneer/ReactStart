import React from "react";
import { ReactComponent as Svg } from '../img/magnifier_icon-icons.com_67993.svg';

function HeaderSearch() {
	let [active, setActive] = React.useState('');

	function addClass(e) {
		if (e.target.closest('.header__loupe'))
			document.querySelector('.header__showSearch').classList.toggle('active')
	}

	return (
		<div
			className={["header__loupe", active].join(' ')}
			onClick={(e) => { console.log(e); addClass(e) }}>
			<div>
				<Svg ></Svg>
			</div>
		</div >
	)
}
export default HeaderSearch;