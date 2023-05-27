import CenterContainer from '../centerContainer/centerContainer.js';
import Error from '../error/error.js';
import { useTranslation } from "react-i18next";
import classnames from 'classnames';
import useForm from './useForm.js';
import { OpenEye, CloseEye } from './Eyes.js';

function Registration() {
	const { classes, eyeclasses, validLogin, validPass, error, sawPass, blur, loginHandler, buttonRegistrValid, loginerr, passerr, login, pass, passType, focus, passRef, email, validEmail, emailerr, emailHandler, registrationHandler, passHandler, equalHandler, repeat, repeatEyeclasses, repeatPassType, equal } = useForm();
	// console.log(buttonValid)
	const { t } = useTranslation();

	return (
		<CenterContainer>
			{error && <Error error={error}></Error>}
			<h1 className="authorization__title">{t("auth.registr")}</h1>
			<form
				action="#"
				method='POST'
				onSubmit={(e) => registrationHandler(e)}
				className="authorization__form">
				<div className="authorization__input">
					<span className="authorization__text">{t("auth.login")}</span>
					<input
						type="text"
						value={login}
						autoComplete="off"
						placeholder={t("auth.login")}
						name="login"
						onChange={(e) => { loginHandler(e) }}
						onBlur={blur}
						className={classnames("input input-auth", { active: classes })}>
					</input>
					{(validLogin && loginerr) && <div className='authorization__err'>{t("auth.loginerr")}</div>}
				</div>
				<div className="authorization__input">
					<span className="authorization__text">{t("auth.email")}</span>
					<input
						type="text"
						value={email}
						autoComplete="off"
						placeholder={t("auth.email")}
						name="email"
						onBlur={blur}
						onChange={(e) => { emailHandler(e) }}
						className={classnames("input input-auth", { active: classes })}>
					</input>
					{(validEmail && emailerr) && <div className='authorization__err'>{emailerr}</div>}
				</div>
				<div className="authorization__input">
					<div className="authorization__pass-header">
						<span className="authorization__text">{t("auth.pass")}</span>
						<span
							className={classnames("authorization__eye pass", { active: eyeclasses })}
							onClick={(e) => { sawPass(e); focus(e) }}>
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
				<div className="authorization__input">
					<div className="authorization__pass-header">
						<span className="authorization__text">{t("auth.pass")}</span>
						<span
							className={classnames("authorization__eye repeat", { active: repeatEyeclasses })}
							onClick={(e) => { sawPass(e); focus(e) }}>
							<CloseEye></CloseEye>
							<OpenEye></OpenEye>
						</span>
					</div>
					<input
						type={repeatPassType}
						value={repeat}
						ref={passRef}
						placeholder={t("auth.pass")}
						autoComplete="off"
						name="password"
						onBlur={blur}
						className={classnames("input input-auth", { active: classes })}
						onChange={(e) => { equalHandler(e) }}>
					</input>
					{(validPass && equal) && <div className='authorization__err'>{equal}</div>}
				</div>
				<button
					className={classnames("button button__authorization", { disabled: !buttonRegistrValid })}
					type="submit">{t("auth.register")}
				</button>
			</form>
		</CenterContainer>
	)
}
export default Registration;