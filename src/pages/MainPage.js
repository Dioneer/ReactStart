import Header from '../components/header/header.js';
import MainBlock from '../components/mainblock/mainBlock.js';
import { Provider } from '../components/context.js';
import Container from '../components/UI/container.js';
import Wrapper from "../components//UI/wrapper.js";

function MainPage() {
	return (
		<Provider>
			<Wrapper>
				<Header></Header>
				<Container>
					<MainBlock></MainBlock>
				</Container>
			</Wrapper>
		</Provider>
	)

}

export default MainPage;