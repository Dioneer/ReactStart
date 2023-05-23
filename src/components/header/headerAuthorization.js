import './header.css';
import HeaderLogo from './header-logo';
import Language from '../language/language';

function HeaderAuth() {

	return (
		<header
			className='header'>
			<div className='container__header container__header_auth'>
				<HeaderLogo></HeaderLogo>
				<Language></Language>
			</div>
		</header >
	)

}
export default HeaderAuth;