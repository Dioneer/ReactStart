import './authorization.css';
import { Link } from "react-router-dom";
import classnames from "classnames";
import { useTranslation } from "react-i18next";
import Error from '../../components/error/error.js';
import useForm from './useForm';
import CenterContainer from '../centerContainer/centerContainer.js';
import { OpenEye, CloseEye } from './Eyes.js';
import Button from '../UI/button.js';
import { Inputs } from '../UI/input.js';

function Authorization() {
	const { value, buttonValid, validData, dataErr, classes, eyeclasses, error, sawPass, blur, loginHandler, enterHandler, passType, focus, passHandler } = useForm();
	const { t } = useTranslation();

	return (
		<CenterContainer>
			< h1 className="authorization__title" > {t("auth.invite")}</h1 >
			{error && <Error error={error}></Error>}
			<form
				action="#"
				method="POST"
				onSubmit={(e) => { enterHandler(e) }}
				className="authorization__form">
				<div className="authorization__input">
					<span className="authorization__text">{t("auth.login")}</span>
					<Inputs type={"text"} value={value.login} place={t("auth.login")} name={"login"} blur={blur} act={classes} aux={"input-auth"} onchange={loginHandler}></Inputs>
					{(validData.validLogin && dataErr.loginerr) && <div className='authorization__err'>{t("auth.loginerr")}</div>}
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
				<ul className="authorization__buttons">
					<li
						className="authorization__link">
						<Link to="/ReactStart/registr">
							<span>{t("auth.registration")}</span>
						</Link>
					</li>
					<li
						className="authorization__link">
						<Link to="/ReactStart/forgottten">
							<span>{t("auth.forgot")}</span>
						</Link>
					</li>
					<li className="authorization__button">
						<Button aux={"button__authorization"} title={t("auth.enter")} dis={!buttonValid.buttonLoginValid} type={"submit"}></Button>
					</li>
				</ul>
			</form>
			<Link to='/ReactStart/main'>link</Link>
			<Link to='/ReactStart/notfound'>link</Link>
		</CenterContainer >
	)
}

export default Authorization;