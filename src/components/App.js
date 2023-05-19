import { Context, Calendar, HeaderContext } from './context.js';
import Header from './header/header.js';
import MainBlock from './mainblock/mainBlock.js';
import { useApp } from './useApp.js';


function App() {
	const { textContent, toggle, remove, addTodo, backEndDate, onCalendarChange, changeImages, images, commonClasses, setCommonClasses, error } = useApp()
	return (
		<Context.Provider value={{ textContent, toggle, remove, addTodo, changeImages, images, error }} >
			<HeaderContext.Provider value={{ commonClasses, setCommonClasses }}>
				<Calendar.Provider value={{ backEndDate, onCalendarChange }}>
					<div className="wrapper">
						<Header></Header>
						<div className='container'>
							<MainBlock></MainBlock>
						</div>
					</div>
				</Calendar.Provider>
			</HeaderContext.Provider>
		</Context.Provider>
	);
}


export default App;
