import React, { useContext, useEffect } from "react";
import TodoList from '../todo/todoUl.js';
import Context from '../context.js';
import OppurtUl from "../opportunity/opporUl.js";
import TodoVriables from "../todo/todoVar.js";
import TodoLoader from "../loader/loader.js";
import Modal from "../modal/modal.js";
import './mainblock.css';
import '../opportunity/opportunity.css';



function MainBlock() {
	const { textContent, classes } = useContext(Context);
	let [loading, setLoading] = React.useState(true);
	let [title, setTitle] = React.useState('Wright or draw ToD');

	// useEffect(() => {
	// 	fetch('https://jsonplaceholder.typicode.com/todos?_limit=6')
	// 		.then(response => response.json())
	// 		.then(data =>
	// 			setTimeout(() => {
	// 				setTodo(data);
	// 				removeLoad();
	// 			}, 2000))
	// })

	useEffect(() => {
		if (window.matchMedia("(max-width: 767.98px)").matches) {
			setTitle(title = 'Wright ToDo')
		}
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
				<div className="content__container">
					<h1 className="content__title title">{title}</h1>
					<Modal></Modal>
				</div>
				<TodoVriables></TodoVriables>
				<h1 className="page__title title">today</h1>
				{loading && <TodoLoader></TodoLoader>}
				{(textContent.length) ? < TodoList ></ TodoList> : loading ? null : <div className='lazy'>Congratulations! You have no TODO</div>}
			</div>
		</div >
	)
}

export default MainBlock;