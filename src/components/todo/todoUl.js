import ToDoLi from "./todoLi";
import { useAppContext } from '../context.js';
import './todo.css';


function ToDoList() {
	const { textContent, toggle, remove } = useAppContext();
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