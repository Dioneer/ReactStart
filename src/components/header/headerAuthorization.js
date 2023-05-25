import './header.css';
import HeaderLogo from './header-logo';
import Language from '../language/language';
import Theme from '../theme/theme.js';

function HeaderAuth() {

	return (
		<header
			className='header'>
			<div className='container__header container__header-auth'>
				<HeaderLogo></HeaderLogo>
				<div className="container__header-auth_right-block">
					<Theme></Theme>
					<Language></Language>
				</div>
			</div>
		</header >
	)

}
export default HeaderAuth;