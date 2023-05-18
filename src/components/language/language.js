import { useRef } from "react";
import { useTranslation } from "react-i18next";
import './language.css';

function Language() {
	const languageRef = useRef(null);
	const { i18n } = useTranslation();

	const changeLanguage = (language, e) => {
		i18n.changeLanguage(language)
		const child = languageRef.current.children;
		for (let item of child) {
			item.classList.remove('active');
		}
		e.target.closest('li').classList.add('active');
	}

	return (
		<ul className="change-lang-link" ref={languageRef}>
			<li className='active'
				onClick={(e) => { changeLanguage("en", e) }}>
				<span>en</span>
			</li>
			<li className=''
				onClick={(e) => { changeLanguage("ru", e) }}>
				<span>ru</span>
			</li>
		</ul>
	)
}
export default Language;