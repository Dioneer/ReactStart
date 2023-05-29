import HeaderAuth from '../components/header/headerAuthorization.js';
import { Fragment } from 'react';
import ForgottenData from '../components/authorization/forgottenData.js';

function ForgottenDataPage() {
	return (
		<Fragment>
			<HeaderAuth></HeaderAuth>
			<div className='container'>
				<ForgottenData></ForgottenData>
			</div>
		</Fragment>
	)
}

export default ForgottenDataPage;