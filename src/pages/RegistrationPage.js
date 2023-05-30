import HeaderAuth from '../components/header/headerAuthorization.js';
import { Fragment } from 'react';
import Registration from '../components/authorization/registration.js';
import Container from '../components/UI/container.js';

function RegistrationPage() {
	return (
		<Fragment>
			<HeaderAuth></HeaderAuth>
			<Container>
				<Registration ></Registration>
			</Container>
		</Fragment>
	)
}

export default RegistrationPage;