import { Suspense } from 'react';
import Context from './context.js';
import Header from './header/header.js';
import MainBlock from './mainblock/mainBlock.js';
import { useApp } from './useApp.js';
import TodoLoader from './loader/loader.js'

function App() {
	const { textContent, toggle, remove, addTodo, backEndDate, onCalendarChange, changeImages, images, commonClasses, setCommonClasses, error } = useApp()
	return (
		<Context.Provider value={{ textContent, toggle, remove, addTodo, backEndDate, onCalendarChange, changeImages, images, commonClasses, setCommonClasses, error }} >
			<Suspense fallback={<TodoLoader></TodoLoader>}>
				<div className="wrapper">
					<Header></Header>
					<div className='container'>
						<MainBlock></MainBlock>
					</div>
				</div>
			</Suspense>
		</Context.Provider >
	);
}


export default App;
