import React, { useContext } from "react";
import Context from '../context.js';
import { ReactComponent as Svg } from '../img/magnifier_icon-icons.com_67993.svg';

function HeaderSearch() {
	const { changeClass, show } = useContext(Context);

	return (
		<div
			className={["header__loupe", show].join(' ')}
			onClick={(e) => { changeClass(e) }}>
			<div>
				<Svg ></Svg>
			</div>
		</div >
	)
}
export default HeaderSearch;