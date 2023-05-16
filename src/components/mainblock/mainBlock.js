import { useContext, useEffect, useState } from "react";
import TodoList from '../todo/todoUl.js';
import Context from '../context.js';
import OppurtUl from "../opportunity/opporUl.js";
import TodoVriables from "../todo/todoVar.js";
import TodoLoader from "../loader/loader.js";
import Calendar from '../calendar/calendar.js';
import Canvas from '../canvas/canvas.js';
import Modal from '../modal/modal.js';
import './mainblock.css';
import * as functions from '../calendar/utilitFunctions.js';
import classNames from "classnames";
import Error from '../error/error.js';

function MainBlock() {
	const { textContent, backEndDate, onCalendarChange, commonClasses, error } = useContext(Context);
	let [loading, setLoading] = useState(true);
	let [title, setTitle] = useState('Wright or draw ToDo');
	let [newDate, setNewDate] = useState(backEndDate);

	// useEffect(() => {
	// 	fetch('https://jsonplaceholder.typicode.com/todos?_limit=6')
	// 		.then(response => response.json())
	// 		.then(data =>
	// 			setTimeout(() => {
	// 				setTodo(data);
	// 				removeLoad();
	// 			}, 2000))
	// })

	function subtitle(obj) {
		if (functions.equal(obj, new Date())) { return 'today' }
		else { return `${obj.getDate()} ${obj.getMonth() + 1} ${obj.getFullYear()}` }
	}

	useEffect(() => {
		if (window.matchMedia("(max-width: 767.98px)").matches) { setTitle(title = 'Wright ToDo') }
		else {
			setTitle(title = 'Wright or draw ToDo')
		}

		if (textContent.length) {
			removeLoad()
		}
		console.log(1)
	})

	function removeLoad() {
		setLoading((textContent.length) ? loading = false : null)
	}

	function cahngeDayOfToDoPrev() {
		setNewDate(newDate = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + 1));
		onCalendarChange(newDate);
	}
	function cahngeDayOfToDoNext() {
		setNewDate(newDate = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() - 1));
		onCalendarChange(newDate);
	}

	return (
		<div className='page'>
			<aside className="aside">
				<div className="aside__title title mx-2.5">opportunity</div>
				<OppurtUl></OppurtUl>
			</aside>
			<div className={classNames("content", { active: commonClasses })}>
				<div className="content__container">
					<h1
						className="content__title title">{title}</h1>
					<Modal title={'canvas'}><Canvas></Canvas></Modal>
					<Modal title={'calendar'}><Calendar></Calendar></Modal>
				</div>
				<TodoVriables></TodoVriables>
				<div className="page__controll">
					<span
						className="text-4xl text-zinc-800 hover:scale-125"
						onClick={cahngeDayOfToDoNext}>{'<'}</span>
					<h1 className="page__title title">{subtitle(backEndDate)}</h1>
					<span
						className="text-4xl text-zinc-800 hover:scale-125"
						onClick={cahngeDayOfToDoPrev}>{'>'}</span>
				</div>
				{loading && <TodoLoader></TodoLoader>}
				{error && <Error error={error}></Error>}
				{(textContent.length && !error) ? < TodoList ></ TodoList> : loading || error ? null : <div className='lazy'>Congratulations! You have no TODO</div>}
			</div >
		</div >
	)
}

export default MainBlock;