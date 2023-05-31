import { useState } from "react";
import { todoService } from "../services/addTodo.js";

export function useApp() {
	const [textContent, setTodo] = useState([]);
	const [commonClasses, setCommonClasses] = useState(false);
	const [backEndDate, setBackEndDate] = useState(new Date());
	const [images, setImages] = useState([]);
	const [error, setError] = useState(false);

	function onCalendarChange(value) {
		const address = 'https://jsonplaceholder.typicode.com/todos/';
		const text = { 'chosenDay': value.getDate(), 'chosenMonth': value.getMonth(), "chosenYear": value.getFullYear() }
		sendBack(text, address);
		setBackEndDate(value)
	}

	function changeImages(value) {
		try {
			const address = 'https://jsonplaceholder.typicode.com/todos/';
			setImages(images.concat(value))
			const add = [{ id: Date.now(), completed: false, title: value, status: 'addImage', img: images.length }]
			sendBack(add, address);
			localStorage.setItem("item", JSON.stringify(add))
			setTodo(textContent.concat(add));
		} catch (e) {
			setError(e.message);
		}
	}

	function toggle(id) {
		const address = 'https://jsonplaceholder.typicode.com/todos/';
		setTodo(textContent.map((text) => {
			if (text.id === id) {
				text.completed = !text.completed;
				sendBack(text, address)
			}
			return text;
		}))
	}
	function remove(id) {
		const address = 'https://jsonplaceholder.typicode.com/todos/';
		setTodo(
			textContent.filter(text => {
				if (text.id === id) {
					sendBack(text, address)
				} return text.id !== id;
			})
		)
	}

	async function sendBack(value, address) {
		try {
			setError(false)
			const data = await todoService.getTodoInfo(value, address)
			console.log(data)
		} catch (e) {
			setError(e.message);
		}
	}

	function addTodo(value) {
		const address = 'https://jsonplaceholder.typicode.com/todos/';
		const add = [{ id: Date.now(), completed: false, title: value, status: 'addTodo', img: null }]
		setTodo(textContent.concat(add));
		sendBack(add, address);
		localStorage.setItem("item", JSON.stringify(add))
	}

	return { textContent, toggle, remove, addTodo, backEndDate, onCalendarChange, changeImages, images, commonClasses, setCommonClasses, error }
}