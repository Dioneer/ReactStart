import HeaderAuth from '../components/header/headerAuthorization.js';
import Wrapper from "../components//UI/wrapper.js";
import ForgottenData from '../components/authorization/forgottenData.js';
import Container from '../components/UI/container.js';

function ForgottenDataPage() {
	return (
		<Wrapper>
			<HeaderAuth></HeaderAuth>
			<Container>
				<ForgottenData></ForgottenData>
			</Container>
		</Wrapper>
	)
}

export default ForgottenDataPage;