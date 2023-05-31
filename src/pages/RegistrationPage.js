import HeaderAuth from '../components/header/headerAuthorization.js';
import Wrapper from "../components//UI/wrapper.js";
import Registration from '../components/authorization/registration.js';
import Container from '../components/UI/container.js';

function RegistrationPage() {
	return (
		<Wrapper>
			<HeaderAuth></HeaderAuth>
			<Container>
				<Registration ></Registration>
			</Container>
		</Wrapper>
	)
}

export default RegistrationPage;