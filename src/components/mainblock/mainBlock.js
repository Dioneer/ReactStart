import React, { useContext, useEffect } from "react";
import TodoList from './todo/todoUl.js';
import Context from '../context.js';
import OppurtUl from "./opportunity/opporUl.js";
import TodoVriables from "./todo/todoVar.js";
import TodoLoader from "./todo/todoLoader.js";
import './mainblock.css';
import './todo/todo.css';
import './opportunity/opportunity.css';



function MainBlock() {
	const { textContent, classes, setTodo } = useContext(Context);
	let [loading, setLoading] = React.useState(true);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=6')
			.then(response => response.json())
			.then(data =>
				setTimeout(() => {
					setTodo(data);
					removeLoad();
				}, 2000))
	})


	function removeLoad() {
		setLoading((textContent.length) ? loading = false : null);
	}

	return (
		<div className='page'>
			<aside className="aside">
				<div className="aside__title title">opportunity</div>
				<OppurtUl></OppurtUl>
			</aside>
			<div className={["content", classes].join(' ')}>
				<h1 className="content__title title"> Wright or draw ToDo</h1>
				<TodoVriables></TodoVriables>
				<h1 className="page__title title">today</h1>
				{loading && <TodoLoader></TodoLoader>}
				{(textContent.length) ? < TodoList ></ TodoList> : loading ? null : <div className='lazy'>Congratulations! You have no TODO</div>}
			</div>
		</div >
	)
}

export default MainBlock;