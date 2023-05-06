import React, { useContext } from "react";
import Context from '../context.js';

function Burger() {
	const { changeClass, classes } = useContext(Context);

	return (<div
		className={["header__burger", classes].join(' ')}
		onClick={(e) => { changeClass(e) }}>
		<span className={classes || ''}></span>
	</div>)
}

export default Burger; 