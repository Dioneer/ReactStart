import Header from './header/header.js';
import MainBlock from './mainblock/mainBlock.js';
import { Provider } from './context.js';


function App() {
	return (
		<Provider>
			<div className="wrapper">
				<Header></Header>
				<div className='container'>
					<MainBlock></MainBlock>
				</div>
			</div>
		</Provider>
	);
}


export default App;
