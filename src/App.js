import TodoList from './todo/todo.js'

function App() {
	const textContent = [
		{ id: "Pattern1", completed: false, title: "Block header" },
		{ id: "Pattern2", completed: false, title: "Block body" },
		{ id: "Pattern3", completed: false, title: "Block footer" },
	]
	return (
		<div className="wrapper">
			<div className="page">
				<div className="container">
					<div className="page__tittle">React start</div>
					<TodoList textContent={textContent}></TodoList>
				</div>
			</div>
		</div>
	);
}

export default App;
