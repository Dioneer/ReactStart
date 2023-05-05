import Context from './context.js';
import React from "react";
import Header from './header/header.js';
import MainBlock from './mainblock/mainBlock.js';

function App() {
	const [textContent, setTodo] = React.useState([])
	let [classes, setClasses] = React.useState('')

	function toggle(id) {
		setTodo(textContent.map((text) => {
			if (text.id === id) {
				text.completed = !text.completed
			}
			return text;
		}))
	}
	function remove(id) {
		setTodo(
			textContent.filter(text => { return text.id !== id })
		)
	}

	function addTodo(value) {
		setTodo(textContent.concat([{ id: Date.now(), completed: false, title: value }]))
	}

	function changeBurger(e) {
		if (e.target.closest('.header__burger')) {
			classes ? setClasses(classes = '') : setClasses(classes = 'active')
		}
		if (window.matchMedia("(max-width: 767.98px)").matches) {
			document.body.classList.toggle('active');
		}
	}

	return (
		<Context.Provider value={{ textContent, toggle, remove, addTodo, changeBurger, classes }} >
			<div className="wrapper">
				<Header></Header>
				<MainBlock></MainBlock>
			</div>
		</Context.Provider >
	);
}


export default App;
