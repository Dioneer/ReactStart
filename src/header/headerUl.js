import React from "react";
import HeaderLi from "./headerLi";

function HeaderUl() {
	const list = ["First", "Second", "third", "forth"];

	return (
		<ul className="header__list">
			{list.map((li, i) => {
				return <HeaderLi text={[li]}
					key={i}>
				</HeaderLi>
			})}

		</ul>
	)
}
export default HeaderUl;