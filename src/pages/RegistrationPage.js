import HeaderAuth from '../components/header/headerAuthorization.js';
import { Fragment } from 'react';
import Registration from '../components/authorization/registration.js';

function RegistrationPage() {
	return (
		<Fragment>
			<HeaderAuth></HeaderAuth>
			<div className='container'>
				<Registration ></Registration>
			</div>
		</Fragment>
	)
}

export default RegistrationPage;