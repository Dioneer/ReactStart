import ToDoLi from "./todoLi";
import React, { useContext } from "react";
import Context from '../context.js';


function ToDoList() {
	const { textContent, toggle, remove } = useContext(Context);
	return (
		<ul className="page__list">
			{textContent.map((text, i) => { return <ToDoLi text={text} key={text.id} index={i} changeInputLi={toggle} removeLi={remove}></ToDoLi> })}

		</ul>
	)
}

export default ToDoList;