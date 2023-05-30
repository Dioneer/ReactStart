import Header from '../components/header/header.js';
import MainBlock from '../components/mainblock/mainBlock.js';
import { Provider } from '../components/context.js';
import Container from '../components/UI/container.js';

function MainPage() {
	return (
		<Provider>
			<Header></Header>
			<Container>
				<MainBlock></MainBlock>
			</Container>
		</Provider>
	)

}

export default MainPage;