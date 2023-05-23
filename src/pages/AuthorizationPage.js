import HeaderAuth from '../components/header/headerAuthorization.js';
import { Provider } from '../components/context.js';
import Authorization from '../components/authorization/authorization.js';

function AuthorizationPage() {
	return (
		<Provider>
			<HeaderAuth></HeaderAuth>
			<div className='container'>
				<Authorization></Authorization>
			</div>
		</Provider>
	)

}

export default AuthorizationPage;