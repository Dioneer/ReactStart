import { useContext, useState } from 'react';
import Context from '../context.js';
import * as functions from './utilitFunctions.js';

export function useCalendar() {
	const { onCalendarChange, backEndDate } = useContext(Context);
	let [dateMain, setDateMain] = useState(backEndDate);
	let [selectedOptionM, setSelectedOptionM] = useState(dateMain.getMonth());
	let [selectedOptionY, setSelectedOptionY] = useState(dateMain.getFullYear());
	let [classes, setClasses] = useState(false);
	const currentDate = new Date();
	const selectedDay = dateMain;
	const date = functions.getMonthDater(selectedOptionY, selectedOptionM);

	function setValueM() {
		return functions.month.find(curr => curr.value === selectedOptionM);
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
		setSelectedOptionM(selectedOptionM = dateCheck.getMonth());
		setSelectedOptionY(selectedOptionY = dateCheck.getFullYear());
		setDateMain(dateMain = dateCheck);
	}
	function nextButton() {
		const dateCheck = new Date(dateMain.getFullYear(), dateMain.getMonth() + 1);
		setSelectedOptionM(selectedOptionM = dateCheck.getMonth());
		setSelectedOptionY(selectedOptionY = dateCheck.getFullYear());
		setDateMain(dateMain = dateCheck);
	}

	function selectChange(value) {
		(value <= 12 && value > -1) ? setSelectedOptionM(selectedOptionM = value) : setSelectedOptionY(selectedOptionY = value);
		const dateCheck = new Date(selectedOptionY, selectedOptionM);
		setSelectedOptionM(selectedOptionM = dateCheck.getMonth());
		setSelectedOptionY(selectedOptionY = dateCheck.getFullYear());
		setDateMain(dateMain = dateCheck);
		onCalendarChange(dateCheck);
	}
	function dayClick(date) { setDateMain(dateMain = date); onCalendarChange(date) }
	return { setValueM, setValueY, focus, blur, prevButton, nextButton, selectChange, dayClick, currentDate, selectedDay, date, classes }
}