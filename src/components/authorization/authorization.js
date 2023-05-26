import './authorization.css';
import { Link } from "react-router-dom";
import classnames from "classnames";
import { useTranslation } from "react-i18next";
import Error from '../../components/error/error.js';
import useAuthorization from './useAuthorization';
import CenterContainer from '../centerContainer/centerContainer.js';



function Authorization() {
	const { classes, eyeclasses, validLogin, validPass, error, sawPass, blur, validHandler, submitHandler, buttonValid, passref, eyeref, loginerr, passerr, login, pass } = useAuthorization();
	const { t } = useTranslation();

	return (
		<CenterContainer>
			{error && <Error error={error}></Error>}
			< h1 className="authorization__title" > {t("auth.invite")}:</h1 >
			<form
				action="#"
				method="POST"
				onSubmit={(e) => { submitHandler(e) }}
				className="authorization__form">
				<div className="authorization__input">
					<span className="authorization__text">{t("auth.login")}</span>
					<input
						type="text"
						value={login}
						placeholder={t("auth.login")}
						autoComplete="off"
						name="login"
						onBlur={blur}
						className={classnames("input input-auth", { active: classes })}
						onChange={(e) => { validHandler(e) }}>
					</input>
					{(validLogin && loginerr) && <div className='authorization__err'>{t("auth.loginerr")}</div>}
				</div>
				<div className="authorization__input">
					<div className="authorization__pass-header">
						<span className="authorization__text">{t("auth.pass")}</span>
						<span
							className={classnames("authorization__eye", { active: eyeclasses })}
							ref={eyeref}
							onClick={sawPass}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="dark:stroke-amber-500 eye eye-close">
								<path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="dark:stroke-amber-500 eye eye-open">
								<path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
								<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
						</span>
					</div>
					<input
						type="password"
						value={pass}
						ref={passref}
						placeholder={t("auth.pass")}
						autoComplete="off"
						name="password"
						onBlur={blur}
						className={classnames("input input-auth", { active: classes })}
						onChange={(e) => { validHandler(e) }}>
					</input>
					{(validPass && passerr) && <div className='authorization__err'>{t("auth.passerr")}</div>}
				</div>
				<ul className="authorization__buttons">
					<li
						className="authorization__link">
						<Link to="/ReactStart/registr">
							<span>{t("auth.registration")}</span>
						</Link>
					</li>
					<li
						className="authorization__link">
						<Link to="/">
							<span>{t("auth.forgot")}</span>
						</Link>
					</li>
					<li className="authorization__button">
						<button
							className={classnames("button button__authorization", { disabled: !buttonValid })}
							disabled={!buttonValid}
							type="submit">{t("auth.enter")}
						</button>
					</li>
				</ul>
			</form>
			<Link to='/ReactStart/main'>link</Link>
		</CenterContainer>
	)
}

export default Authorization;