import CenterContainer from '../centerContainer/centerContainer.js';
import Error from '../error/error.js';
import useForm from './useForm.js';
import { OpenEye, CloseEye } from './Eyes.js';
import { useTranslation } from "react-i18next";
import classnames from 'classnames';
import Button from '../UI/button.js';
import { Inputs } from '../UI/input.js';

function ForgottenData() {
	const { value, validData, dataErr, classes, eyeclasses, error, sawPass, blur, loginHandler, buttonValid, passType, focus, passHandler, equalHandler, repeatEyeclasses, repeatPassType, forgottenHandler } = useForm();
	const { t } = useTranslation();

	return (
		<CenterContainer>
			< h1 className="authorization__title" > {t("auth.forgottitle")}</h1 >
			{error && <Error error={error}></Error>}
			<form
				action="#"
				method='POST'
				onSubmit={(e) => forgottenHandler(e)}
				className="authorization__form">
				<div className="authorization__input">
					<span className="authorization__text">{t("auth.logoremail")}</span>
					<Inputs type={"text"} value={value.login} place={t("auth.logoremail")} name={"login"} blur={blur} act={classes} aux={"input-auth"} onchange={loginHandler}></Inputs>
					{(validData.validLogin && dataErr.loginerr) && <div className='authorization__err'>{dataErr.loginerr}</div>}
				</div>
				<div className="authorization__input">
					<div className="authorization__pass-header">
						<span className="authorization__text">{t("auth.enterpass")}</span>
						<span
							className={classnames("authorization__eye pass", { active: eyeclasses })}
							onClick={(e) => { sawPass(e); focus(e) }}>
							<CloseEye></CloseEye>
							<OpenEye></OpenEye>
						</span>
					</div>
					<Inputs type={passType} value={value.pass} place={t("auth.enterpass")} name={"password"} blur={blur} act={classes} aux={"input-auth"} onchange={passHandler}></Inputs>
					{(validData.validPass && dataErr.passerr) && <div className='authorization__err'>{dataErr.passerr}</div>}
				</div>
				<div className="authorization__input">
					<div className="authorization__pass-header">
						<span className="authorization__text">{t("auth.repeatpass")}</span>
						<span
							className={classnames("authorization__eye repeat", { active: repeatEyeclasses })}
							onClick={(e) => { sawPass(e); focus(e) }}>
							<CloseEye></CloseEye>
							<OpenEye></OpenEye>
						</span>
					</div>
					<Inputs type={repeatPassType} value={value.repeat} place={t("auth.repeatpass")} name={"password"} blur={blur} act={classes} aux={"input-auth"} onchange={equalHandler}></Inputs>
					{(validData.validPass && dataErr.equalerr) && <div className='authorization__err'>{dataErr.equalerr}</div>}
				</div>
				<Button type={"submit"} aux={"button__authorization"} title={t("auth.enter")} dis={!buttonValid.buttonforgottenValid}></Button>
			</form>
		</CenterContainer>
	)
}

export default ForgottenData;