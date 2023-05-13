import ToDoLi from "./todoLi";
import { useContext } from "react";
import Context from '../context.js';
import './todo.css';


function ToDoList() {
	const { textContent, toggle, remove } = useContext(Context);
	return (
		<ul className="page__list">
			{textContent.map((text, i) => {
				return <ToDoLi text={text}
					key={text.id}
					index={i}
					changeInputLi={toggle}
					removeLi={remove}>
				</ToDoLi>
			})}
		</ul>
	)
}

export default ToDoList;