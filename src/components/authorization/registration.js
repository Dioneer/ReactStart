import CenterContainer from '../centerContainer/centerContainer.js';
import Error from '../error/error.js';
import { useTranslation } from "react-i18next";
import classnames from 'classnames';
import useForm from './useForm.js';
import { OpenEye, CloseEye } from './Eyes.js';
import Button from '../UI/button.js';
import { Inputs } from '../UI/input.js';

function Registration() {
	const { value, validData, dataErr, classes, eyeclasses, error, sawPass, blur, loginHandler, buttonValid, passType, focus, emailHandler, registrationHandler, passHandler, equalHandler, repeatEyeclasses, repeatPassType } = useForm();

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
					<Inputs type={"text"} value={value.login} place={t("auth.login")} name={"login"} blur={blur} act={classes} aux={"input-auth"} onchange={loginHandler}></Inputs>
					{(validData.validLogin && dataErr.loginerr) && <div className='authorization__err'>{dataErr.loginerr}</div>}
				</div>
				<div className="authorization__input">
					<span className="authorization__text">{t("auth.email")}</span>
					<Inputs type={"text"} value={value.email} place={t("auth.email")} name={"email"} blur={blur} act={classes} aux={"input-auth"} onchange={emailHandler}></Inputs>
					{(validData.validEmail && dataErr.emailerr) && <div className='authorization__err'>{dataErr.emailerr}</div>}
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
					<Inputs type={passType} value={value.pass} place={t("auth.pass")} name={"password"} blur={blur} act={classes} aux={"input-auth"} onchange={passHandler}></Inputs>
					{(validData.validPass && dataErr.passerr) && <div className='authorization__err'>{dataErr.passerr}</div>}
				</div>
				<div className="authorization__input">
					<div className="authorization__pass-header">
						<span className="authorization__text">{t("auth.repearegtpass")}</span>
						<span
							className={classnames("authorization__eye repeat", { active: repeatEyeclasses })}
							onClick={(e) => { sawPass(e); focus(e) }}>
							<CloseEye></CloseEye>
							<OpenEye></OpenEye>
						</span>
					</div>
					<Inputs type={repeatPassType} value={value.repeat} place={t("auth.repearegtpass")} name={"password"} blur={blur} act={classes} aux={"input-auth"} onchange={equalHandler}></Inputs>
					{(validData.validPass && dataErr.equalerr) && <div className='authorization__err'>{dataErr.equalerr}</div>}
				</div>
				<Button type={"submit"} aux={"button__authorization"} title={t("auth.register")} dis={!buttonValid.buttonRegistrValid}></Button>
			</form>
		</CenterContainer>
	)
}
export default Registration;
