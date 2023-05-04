import TodoList from './todo/todoUl.js';
import Context from './context.js';
import React from "react";
import AddToDo from './todo/addTodo.js';
import Header from './header/header.js';

function App() {
	const [textContent, setTodo] = React.useState([])
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
	return (
		<Context.Provider value={{ textContent, toggle, remove }} >
			<div className="wrapper">
				<Header></Header>
				<div className='page'>
					<div className='container'>
						<aside className="aside">
							<div className="page__title title">opportunity</div>
						</aside>
						<div className="content">
							<h1 className="page__title title">today</h1>
							<AddToDo onCreate={addTodo}></AddToDo>
							{(textContent.length) ? <TodoList></TodoList> : <div className='lazy'>Congratulations! You have no TODO</div>}
						</div>
					</div>
				</div>
			</div>
		</Context.Provider >
	);
}


export default App;
