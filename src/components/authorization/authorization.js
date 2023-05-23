import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import './authorization.css';

function Authorization() {
	const [classes, setClasses] = useState(false);
	const [login, setLogin] = useState('');
	const [pass, setPass] = useState('');
	const loginInput = useRef(null);
	const passInput = useRef(null);

	function submitHandler(e) {
		e.preventDefault();
	}

	function onFocus() {
		setClasses(prev => !prev)
	}

	function onBlur() {
		setClasses(prev => !prev)
	}

	return (
		<div className="authorization__container">
			<div className="authorization__inputs-container">
				<h1 className="authorization__title">Enter your login and e-mail:</h1>
				<form
					action="#"
					method="POST"
					onSubmit={(e) => { submitHandler(e) }}
					className="authorization__form">
					<div className="authorization__input">
						<span className="authorization__text">Login:</span>
						<input
							type="text"
							value={login}
							placeholder="login"
							data-error="ошибка"
							autoComplete="off"
							name="login"
							ref={loginInput}
							className={classnames("input input-auth", { active: classes })}
							onFocus={onFocus}
							onBlur={onBlur}
							onChange={(e) => { setLogin(e.target.value) }}>
						</input>
					</div>
					<div className="authorization__input">
						<span className="authorization__text">E-mail:</span>
						<input
							type="text"
							value={pass}
							placeholder="e-mail"
							data-error="ошибка"
							autoComplete="off"
							name="e-mail"
							className={classnames("input input-auth", { active: classes })}
							onFocus={onFocus}
							onBlur={onBlur}
							ref={passInput}
							onChange={(e) => { setPass(e.target.value) }}>
						</input>
					</div>
					<ul className="authorization__buttons">
						<li
							className="button button__authorization">
							<Link to="/">
								<span>Регистрация</span>
							</Link>
						</li>
						<li
							className="authorization__link">
							<Link to="/">
								<span>Забыли пароль?</span>
							</Link>
						</li>
						<li>
							<button
								className="button button__authorization"
								type="submit">Вход
							</button>
						</li>
					</ul>
				</form>
			</div>
		</div >
	)
}

export default Authorization;