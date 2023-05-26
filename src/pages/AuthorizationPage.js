import HeaderAuth from '../components/header/headerAuthorization.js';
import { Fragment } from 'react';
import Authorization from '../components/authorization/authorization.js';

function AuthorizationPage() {
	return (
		<Fragment>
			<HeaderAuth></HeaderAuth>
			<div className='container'>
				<Authorization></Authorization>
			</div>
		</Fragment>
	)

}

export default AuthorizationPage;