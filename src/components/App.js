import Context from './context.js';
import React from "react";
import Header from './header/header.js';
import MainBlock from './mainblock/mainBlock.js';

function App() {
	const [textContent, setTodo] = React.useState([]);
	let [classes, setClasses] = React.useState('');
	let [show, setShow] = React.useState('');

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
		const add = [{ id: Date.now(), completed: false, title: value, status: 'addTodo' }]
		setTodo(textContent.concat(add));
		sendBack(add, address);
	}

	function changeClass(e) {
		if (e.target.closest('.header__burger')) {
			classes ? setClasses(classes = '') : setClasses(classes = 'active')
		}
		if (e.target.closest('.header__loupe')) {
			show ? setShow(show = '') : setShow(show = 'active')
		}
	}

	return (
		<Context.Provider value={{ textContent, toggle, remove, addTodo, changeClass, classes, show, setTodo }} >
			<div className="wrapper">
				<Header></Header>
				<div className='container'>
					<MainBlock></MainBlock>
				</div>
			</div>
		</Context.Provider >
	);
}


export default App;
