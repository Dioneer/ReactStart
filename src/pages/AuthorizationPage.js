import HeaderAuth from '../components/header/headerAuthorization.js';
import Wrapper from "../components//UI/wrapper.js";
import Authorization from '../components/authorization/authorization.js';
import Container from '../components/UI/container.js';

function AuthorizationPage() {
	return (
		<Wrapper>
			<HeaderAuth></HeaderAuth>
			<Container>
				<Authorization></Authorization>
			</Container>
		</Wrapper>
	)

}

export default AuthorizationPage;