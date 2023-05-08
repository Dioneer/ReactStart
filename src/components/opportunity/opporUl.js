import React from "react";
import OpportLi from './opporLi.js';

function OppurtUl() {
	const list = ["archive", 'second', 'third']

	return (
		<ul className="aside__list">
			{list.map((li, i) => {
				return <OpportLi
					key={i}
					text={li}
				></OpportLi>
			})}
		</ul>
	)
}

export default OppurtUl;