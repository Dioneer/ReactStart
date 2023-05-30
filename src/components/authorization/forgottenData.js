import CenterContainer from '../centerContainer/centerContainer.js';
import Error from '../error/error.js';
import useForm from './useForm.js';
import { OpenEye, CloseEye } from './Eyes.js';
import { useTranslation } from "react-i18next";
import classnames from 'classnames';
import Button from '../UI/button.js';

function ForgottenData() {
	const { classes, eyeclasses, validLogin, validPass, error, sawPass, blur, loginHandler, buttonforgottenValid, loginerr, passerr, login, pass, passType, focus, passHandler, equalHandler, repeat, repeatEyeclasses, repeatPassType, equal, forgottenHandler } = useForm();
	const { t } = useTranslation();

	return (
		<CenterContainer>
			{error && <Error error={error}></Error>}
			<form
				action="#"
				method='POST'
				onSubmit={(e) => forgottenHandler(e)}
				className="authorization__form">
				<div className="authorization__input">
					<span className="authorization__text">{t("auth.logoremail")}</span>
					<input
						type="text"
						value={login}
						autoComplete="off"
						placeholder={t("auth.logoremail")}
						name="login"
						onChange={(e) => { loginHandler(e) }}
						onBlur={blur}
						className={classnames("input input-auth", { active: classes })}>
					</input>
					{(validLogin && loginerr) && <div className='authorization__err'>{loginerr}</div>}
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
					<input
						type={passType}
						value={pass}
						placeholder={t("auth.enterpass")}
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
						<span className="authorization__text">{t("auth.repeatpass")}</span>
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
						placeholder={t("auth.repeatpass")}
						autoComplete="off"
						name="password"
						onBlur={blur}
						className={classnames("input input-auth", { active: classes })}
						onChange={(e) => { equalHandler(e) }}>
					</input>
					{(validPass && equal) && <div className='authorization__err'>{equal}</div>}
				</div>
				<Button type={"submit"} aux={"button__authorization"} title={t("auth.enter")} dis={!buttonforgottenValid}></Button>
			</form>
		</CenterContainer>
	)
}

export default ForgottenData;