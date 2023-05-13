import Context from './context.js';
import Header from './header/header.js';
import MainBlock from './mainblock/mainBlock.js';
import { useApp } from './useApp.js';

function App() {
	const { textContent, toggle, remove, addTodo, setTodo, backEndDate, onCalendarChange, changeImages, images, commonClasses, setCommonClasses } = useApp()
	return (
		<Context.Provider value={{ textContent, toggle, remove, addTodo, setTodo, backEndDate, onCalendarChange, changeImages, images, commonClasses, setCommonClasses }} >
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