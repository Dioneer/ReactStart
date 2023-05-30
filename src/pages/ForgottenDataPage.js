import HeaderAuth from '../components/header/headerAuthorization.js';
import { Fragment } from 'react';
import ForgottenData from '../components/authorization/forgottenData.js';
import Container from '../components/UI/container.js';

function ForgottenDataPage() {
	return (
		<Fragment>
			<HeaderAuth></HeaderAuth>
			<Container>
				<ForgottenData></ForgottenData>
			</Container>
		</Fragment>
	)
}

export default ForgottenDataPage;