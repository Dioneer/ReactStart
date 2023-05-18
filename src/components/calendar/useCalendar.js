import { useState } from 'react';
import { useCalendarContext } from '../context.js';
import * as functions from './utilitFunctions.js';
import { useTranslation } from "react-i18next";

export function useCalendar() {
	const { onCalendarChange, backEndDate } = useCalendarContext();
	let [dateMain, setDateMain] = useState(backEndDate);
	let [selectedOptionM, setSelectedOptionM] = useState(dateMain.getMonth());
	let [selectedOptionY, setSelectedOptionY] = useState(dateMain.getFullYear());
	let [classes, setClasses] = useState(false);
	const currentDate = new Date();
	const selectedDay = dateMain;
	const date = functions.getMonthDater(selectedOptionY, selectedOptionM);
	const { t } = useTranslation();

	function setValueM() {
		return t('main.month', { returnObjects: true }).find(curr => curr.value === selectedOptionM);
	}
	function setValueY() {
		return functions.year.find(curr => curr.value === selectedOptionY);
	}

	function focus() {
		setClasses(classes = !classes);
	}

	function blur() {
		setClasses(classes = !classes);
	}

	function prevButton() {
		const dateCheck = new Date(dateMain.getFullYear(), dateMain.getMonth() - 1);
		setSelectedOptionM(dateCheck.getMonth());
		setSelectedOptionY(dateCheck.getFullYear());
		setDateMain(dateCheck);
		console.log(1)
	}
	function nextButton() {
		const dateCheck = new Date(dateMain.getFullYear(), dateMain.getMonth() + 1);
		setSelectedOptionM(dateCheck.getMonth());
		setSelectedOptionY(dateCheck.getFullYear());
		setDateMain(dateCheck);
		console.log(2)
	}

	function selectChange(value) {
		(value <= 12 && value > -1) ? setSelectedOptionM(selectedOptionM = value) : setSelectedOptionY(selectedOptionY = value);
		const dateCheck = new Date(selectedOptionY, selectedOptionM);
		setSelectedOptionM(dateCheck.getMonth());
		setSelectedOptionY(dateCheck.getFullYear());
		setDateMain(dateCheck);
		onCalendarChange(dateCheck);
	}
	function dayClick(date) { setDateMain(date); onCalendarChange(date) }
	return { setValueM, setValueY, focus, blur, prevButton, nextButton, selectChange, dayClick, currentDate, selectedDay, date, classes }
}