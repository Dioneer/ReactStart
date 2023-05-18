import { useRef, Suspense } from "react";
import { useTranslation } from "react-i18next";
import TodoLoader from '../loader/loader.js'
import './language.css';

function Language() {
	const languageRef = useRef(null);
	const { t, i18n } = useTranslation();

	const changeLanguage = (language, e) => {
		i18n.changeLanguage(language)
		const child = languageRef.current.children;
		for (let item of child) {
			item.classList.remove('active');
		}
		e.target.closest('li').classList.add('active');
	}

	return (
		<Suspense fallback={<TodoLoader></TodoLoader>}>
			<ul className="changeLanguage" ref={languageRef}>
				<li className='active'
					onClick={(e) => { changeLanguage("ru", e) }}>
					<span>ru</span>
				</li>
				<li className=''
					onClick={(e) => { changeLanguage("en", e) }}>
					<span>en</span>
				</li>
				<div className="aside__title title mx-2.5">{t("main.opportunitytr")}</div>
			</ul>
		</Suspense >
	)
}
export default Language;