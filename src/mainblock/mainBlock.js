import React, { useContext } from "react";
import TodoList from '../todo/todoUl.js';
import AddToDo from '../todo/addTodo.js';
import Context from '../context.js';

function MainBlock() {
	const { textContent, addTodo, classes } = useContext(Context);
	return (
		<div className='page'>
			<div className='container page__container'>
				<aside className="aside">
					<div className="page__title title">opportunity</div>
				</aside>
				<div className={["content", classes].join(' ')}>
					<h1 className="page__title title">today</h1>
					<AddToDo onCreate={addTodo}></AddToDo>
					{(textContent.length) ? <TodoList></TodoList> : <div className='lazy'>Congratulations! You have no TODO</div>}
				</div>
			</div>
		</div>
	)
}

export default MainBlock;