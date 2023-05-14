import HeaderLi from "./headerLi";
import OpportUl from "../opportunity/opporUl.js";

function HeaderUl() {
	const list = ["First", "Second", "third", "forth"];

	return (
		<ul className="header__list">
			{list.map((li, i) => {
				return <HeaderLi text={li}
					key={i}>
				</HeaderLi>
			})}
			<div className="header__addOpport"> <OpportUl></OpportUl></div>
		</ul>
	)
}
export default HeaderUl;