import CenterContainer from '../centerContainer/centerContainer.js';
import Error from '../error/error.js';
import { useTranslation } from "react-i18next";
import classnames from 'classnames';
import useAuthorization from './useAuthorization.js';

function Registration() {
	const { classes } = useAuthorization();
	const { t } = useTranslation();

	return (
		<CenterContainer>
			{/* {error && <Error error={error}></Error>} */}
			<h1 className="authorization__title">{t("auth.registr")}</h1>
			<form
				action="#"
				method='POST'
				onSubmit={(e) => e.preventDefault()}
				className="authorization__form">
				<div className="authorization__input">
					<span className="authorization__text">{t("auth.login")}</span>
					<input
						type="text"
						value=""
						autoComplete="off"
						placeholder={t("auth.login")}
						name="login"
						className={classnames("input input-auth", { active: classes })}>
					</input>
				</div>
				<div className="authorization__input">
					<span className="authorization__text">{t("auth.email")}</span>
					<input
						type="text"
						value=""
						autoComplete="off"
						placeholder={t("auth.email")}
						name="email"
						className={classnames("input input-auth", { active: classes })}>
					</input>
				</div>
				<div className="authorization__input">
					<span className="authorization__text">{t("auth.pass")}</span>
					<input
						type="password"
						value=""
						autoComplete="off"
						placeholder={t("auth.pass")}
						name="pass"
						className={classnames("input input-auth", { active: classes })}>
					</input>
				</div>
				<div className="authorization__input">
					<span className="authorization__text">{t("auth.pass")}</span>
					<input
						type="password"
						value=""
						autoComplete="off"
						placeholder={t("auth.pass")}
						name="repeat-pass"
						className={classnames("input input-auth", { active: classes })}>
					</input>
				</div>
				<button
					className={classnames("button button__authorization")}
					type="submit">{t("auth.register")}
				</button>
			</form>
		</CenterContainer>
	)
}
export default Registration;