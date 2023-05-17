import { useRef, Suspense } from "react";
import { useTranslation, Trans } from "react-i18next";
import TodoLoader from '../loader/loader.js'
import './language.css';

function Language() {
	const languageRef = useRef(null);
	const { t, i18n } = useTranslation();

	const changeLanguage = (lang) => {
		i18n.changeLanguage(lang)
		// const child = languageRef.current.children;
		// for (let item of child) {
		// 	item.classList.remove('active');
		// }
		// e.target.closest('li').classList.add('active');
	}

	return (
		<Suspense fallback={<TodoLoader></TodoLoader>}>
			<ul className="changeLanguage" ref={languageRef}>
				<li className='active'
					onClick={(e) => { changeLanguage('en') }}>
					<span>ru</span>
				</li>
				<li className=''
					onClick={(e) => { changeLanguage('ru') }}>
					<span>en</span>
				</li>
				<div className="aside__title title mx-2.5"><Trans i18nKey="opportunity">opportunity</Trans></div>
			</ul>
		</Suspense >
	)
}
export default Language;