import HeaderAuth from '../components/header/headerAuthorization.js';
import { Fragment } from 'react';
import Authorization from '../components/authorization/authorization.js';
import Container from '../components/UI/container.js';

function AuthorizationPage() {
	return (
		<Fragment>
			<HeaderAuth></HeaderAuth>
			<Container>
				<Authorization></Authorization>
			</Container>
		</Fragment>
	)

}

export default AuthorizationPage;