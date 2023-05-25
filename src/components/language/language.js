import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import Select from 'react-select';
import * as functions from "./utilitsLang.js";
import './language.css';

function Language() {
	const { i18n } = useTranslation();
	const [selectedLang, setSelectedLang] = useState(localStorage.getItem("i18nextLng"));

	const changeLanguage = (language) => {
		i18n.changeLanguage(language)
	}

	const selectHolder = useCallback(() => {
		return functions.lang.find(curr => curr.value === selectedLang)
	}, [selectedLang])

	function selectChange(e) {
		setSelectedLang(e.value)
		changeLanguage(e.value, e)
	}

	return (
		<Select
			options={functions.lang}
			classNamePrefix='select-langLink'
			className="change-lang"
			value={selectHolder()}
			onChange={(e) => selectChange(e)}>
		</Select >
	)
}
export default Language;

