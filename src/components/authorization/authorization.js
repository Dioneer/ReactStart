import './authorization.css';
import { Link } from "react-router-dom";
import classnames from "classnames";
import { useTranslation } from "react-i18next";
import Error from '../../components/error/error.js';
import useForm from './useForm';
import CenterContainer from '../centerContainer/centerContainer.js';
import { OpenEye, CloseEye } from './Eyes.js';

function Authorization() {
	const { classes, eyeclasses, validLogin, validPass, error, sawPass, blur, loginHandler, submitHandler, buttonLoginValid, loginerr, passerr, login, pass, passType, focus, passRef, passHandler } = useForm();
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
						onChange={(e) => { loginHandler(e) }}>
					</input>
					{(validLogin && loginerr) && <div className='authorization__err'>{t("auth.loginerr")}</div>}
				</div>
				<div className="authorization__input">
					<div className="authorization__pass-header">
						<span className="authorization__text">{t("auth.pass")}</span>
						<span
							className={classnames("authorization__eye", { active: eyeclasses })}
							onClick={() => { sawPass(); focus() }}>
							<CloseEye></CloseEye>
							<OpenEye></OpenEye>
						</span>
					</div>
					<input
						type={passType}
						value={pass}
						ref={passRef}
						placeholder={t("auth.pass")}
						autoComplete="off"
						name="password"
						onBlur={blur}
						className={classnames("input input-auth", { active: classes })}
						onChange={(e) => { passHandler(e) }}>
					</input>
					{(validPass && passerr) && <div className='authorization__err'>{passerr}</div>}
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
							className={classnames("button button__authorization", { disabled: !buttonLoginValid })}
							type="submit">{t("auth.enter")}
						</button>
					</li>
				</ul>
			</form>
			<Link to='/ReactStart/main'>link</Link>
		</CenterContainer >
	)
}

export default Authorization;