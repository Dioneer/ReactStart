import { useEffect, useState } from "react";
import HeaderLi from "./headerLi";
import OpportUl from "../opportunity/opporUl.js";

function HeaderUl() {
	const list = ["First", "Second", "third", "forth"];
	let [isAdd, setIsAdd] = useState(false);

	useEffect(() => {
		if (window.matchMedia("(max-width: 767.98px)").matches) {
			setIsAdd(isAdd = true)
		} else setIsAdd(isAdd = false)
	})

	return (
		<ul className="header__list flex p-0 m-l justify-between items-center">
			{list.map((li, i) => {
				return <HeaderLi text={li}
					key={i}>
				</HeaderLi>
			})}
			{isAdd ? <OpportUl></OpportUl> : ''}
		</ul>
	)
}
export default HeaderUl;