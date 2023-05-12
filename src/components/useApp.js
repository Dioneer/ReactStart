import { useState } from "react";

export function useApp() {
	const [textContent, setTodo] = useState([]);
	let [commonClasses, setCommonClasses] = useState(false);
	let [backEndDate, setBackEndDate] = useState(new Date());
	let [images, setImages] = useState([]);

	function onCalendarChange(value) {
		const address = 'https://jsonplaceholder.typicode.com/todos/';
		const text = { 'chosenDay': value.getDate(), 'chosenMonth': value.getMonth(), "chosenYear": value.getFullYear() }
		sendBack(text, address);
		setBackEndDate(backEndDate = value)
	}

	function changeImages(value) {
		setImages(images.concat(value))
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
		const response = await fetch(address, {
			body: JSON.stringify(value),
			headers: { "Content-Type": "application/json" },
			method: "POST",
		})
		const data = await response.json();
		console.log(data)
	}

	function addTodo(value) {
		const address = 'https://jsonplaceholder.typicode.com/todos/';
		const add = [{ id: Date.now(), completed: false, title: value, status: 'addTodo', img: null }]
		setTodo(textContent.concat(add));
		sendBack(add, address);
	}
	return { textContent, toggle, remove, addTodo, setTodo, backEndDate, onCalendarChange, changeImages, images, commonClasses, setCommonClasses }
}