import { useState, useCallback } from 'react';
import { useCalendarContext } from '../context.js';
import * as functions from './utilitFunctions.js';
import { useTranslation } from "react-i18next";

export function useCalendar() {
	const { onCalendarChange, backEndDate } = useCalendarContext();
	const [dateMain, setDateMain] = useState(backEndDate);
	let [selectedOptionM, setSelectedOptionM] = useState(dateMain.getMonth());
	let [selectedOptionY, setSelectedOptionY] = useState(dateMain.getFullYear());
	const [classes, setClasses] = useState(false);
	const currentDate = new Date();
	const selectedDay = dateMain;
	const date = functions.getMonthDater(selectedOptionY, selectedOptionM);
	const { t } = useTranslation();

	const selectFindHolderM = useCallback(() => {
		return t('main.month', { returnObjects: true }).find(curr => curr.value === selectedOptionM);
	}, [selectedOptionM])

	const selectFindHolderY = useCallback(() => {
		return functions.year.find(curr => curr.value === selectedOptionY);
	}, [selectedOptionY])

	function focus() {
		setClasses(classes => !classes);
	}

	function blur() {
		setClasses(classes => !classes);
	}

	function prevButton() {
		const dateCheck = new Date(dateMain.getFullYear(), dateMain.getMonth() - 1);
		setSelectedOptionM(dateCheck.getMonth());
		setSelectedOptionY(dateCheck.getFullYear());
		setDateMain(dateCheck);
	}
	function nextButton() {
		const dateCheck = new Date(dateMain.getFullYear(), dateMain.getMonth() + 1);
		setSelectedOptionM(dateCheck.getMonth());
		setSelectedOptionY(dateCheck.getFullYear());
		setDateMain(dateCheck);
	}

	function selectChange(value) {
		(value <= 12 && value > -1) ? selectedOptionM = value : selectedOptionY = value;
		const dateCheck = new Date(selectedOptionY, selectedOptionM);
		setSelectedOptionM(dateCheck.getMonth());
		setSelectedOptionY(dateCheck.getFullYear());
		setDateMain(dateCheck);
		onCalendarChange(dateCheck);
	}
	function dayClick(date) { setDateMain(date); onCalendarChange(date) }
	return { selectFindHolderM, selectFindHolderY, focus, blur, prevButton, nextButton, selectChange, dayClick, currentDate, selectedDay, date, classes }
}