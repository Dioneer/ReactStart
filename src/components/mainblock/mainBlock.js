import { useContext, useEffect, useState } from "react";
import TodoList from '../todo/todoUl.js';
import Context from '../context.js';
import OppurtUl from "../opportunity/opporUl.js";
import TodoVriables from "../todo/todoVar.js";
import TodoLoader from "../loader/loader.js";
import ModalCalendar from "../modal/modalCalendar.js";
import ModalCanvas from "../modal/modalCanvas.js";
import './mainblock.css';
import '../opportunity/opportunity.css';
import * as functions from '../calendar/utilitFunctions.js';
import classNames from "classnames";

function MainBlock() {
	const { textContent, backEndDate, onCalendarChange, commonClasses } = useContext(Context);
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
		<div className='page flex-auto flex'>
			<aside className="aside">
				<div className="aside__title title mx-2.5">opportunity</div>
				<OppurtUl></OppurtUl>
			</aside>
			<div className={classNames("content", { active: commonClasses })}>
				<div className="content__container">
					<h1
						className="content__title title">{title}</h1>
					<ModalCanvas></ModalCanvas>
					<ModalCalendar></ModalCalendar>
				</div>
				<TodoVriables></TodoVriables>
				<div className="page__controll flex items-center justify-between">
					<span
						className="text-4xl text-zinc-800 hover:scale-125"
						onClick={cahngeDayOfToDoNext}>{'<'}</span>
					<h1 className="page__title title">{subtitle(backEndDate)}</h1>
					<span
						className="text-4xl text-zinc-800 hover:scale-125"
						onClick={cahngeDayOfToDoPrev}>{'>'}</span>
				</div>
				{loading && <TodoLoader></TodoLoader>}
				{(textContent.length) ? < TodoList ></ TodoList> : loading ? null : <div className='lazy'>Congratulations! You have no TODO</div>}
			</div >
		</div >
	)
}

export default MainBlock;