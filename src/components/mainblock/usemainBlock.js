import { useEffect, useState } from "react";
import { useAppContext, useCalendarContext, useHeaderContext } from '../context.js';
import * as functions from '../calendar/utilitFunctions.js';

export function useMainBlock() {
	const { textContent, error } = useAppContext();
	const { commonClasses } = useHeaderContext();
	const { backEndDate, onCalendarChange } = useCalendarContext();
	const [loading, setLoading] = useState(true);
	const [title, setTitle] = useState('mainBigTitle');
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
		if (functions.equal(obj, new Date())) { return 'main.today' }
		else { return `${obj.getDate()} ${obj.getMonth() + 1} ${obj.getFullYear()}` }
	}

	useEffect(() => {
		if (window.matchMedia("(max-width: 767.98px)").matches) {
			setTitle('mainSmallTitle')
		}
		else {
			setTitle('mainBigTitle')
		}
	}, [])
	useEffect(() => {
		if (textContent.length) {
			removeLoad()
		}
	})

	function removeLoad() {
		setLoading((textContent.length) ? false : null)
	}

	function cahngeDayOfToDoPrev() {
		setNewDate(newDate = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + 1));
		onCalendarChange(newDate);
		console.log(newDate)
	}
	function cahngeDayOfToDoNext() {
		setNewDate(newDate = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() - 1));
		onCalendarChange(newDate);
		console.log(newDate)
	}
	return { cahngeDayOfToDoPrev, cahngeDayOfToDoNext, subtitle, error, title, backEndDate, commonClasses, loading, textContent }
}