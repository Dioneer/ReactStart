import logo from '../img/skunk.jpg';

function HeaderLogo() {
	return (
		<div className='header__image'>
			<img alt='logo' src={logo}></img>
		</div>
	)
}
export default HeaderLogo;