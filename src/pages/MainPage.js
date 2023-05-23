import Header from '../components/header/header.js';
import MainBlock from '../components/mainblock/mainBlock.js';
import { Provider } from '../components/context.js';

function MainPage() {
	return (
		<Provider>
			<Header></Header>
			<div className='container'>
				<MainBlock></MainBlock>
			</div>
		</Provider>
	)

}

export default MainPage;