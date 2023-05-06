import Context from './context.js';
import React from "react";
import Header from './header/header.js';
import MainBlock from './mainblock/mainBlock.js';

function App() {
	const [textContent, setTodo] = React.useState([]);
	let [classes, setClasses] = React.useState('');
	let [show, setShow] = React.useState('');

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
