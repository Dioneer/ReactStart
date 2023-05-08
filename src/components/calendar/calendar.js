import React, { useContext } from 'react';
import './calendar.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Context from '../context.js';
import * as functions from './utilitFunctions.js';
import classnames from 'classnames';

const month = [
	{
		value: 0,
		label: 'January'
	},
	{
		value: 1,
		label: 'February'
	},
	{
		value: 2,
		label: 'March'
	},
	{
		value: 3,
		label: 'April'
	},
	{
		value: 4,
		label: 'May'
	},
	{
		value: 5,
		label: 'June'
	},
	{
		value: 6,
		label: 'July'
	},
	{
		value: 7,
		label: 'August'
	},
	{
		value: 8,
		label: 'September'
	},
	{
		value: 9,
		label: 'October'
	},
	{
		value: 10,
		label: 'November'
	},
	{ value: 11, label: 'December' },
]
const year = [{
	value: 2015,
	label: 2015
}, {
	value: 2016,
	label: 2016
},
{
	value: 2017,
	label: 2017
},
{
	value: 2018,
	label: 2018
},
{
	value: 2019,
	label: 2019
},
{
	value: 2020,
	label: 2020
}, {
	value: 2021,
	label: 2021
}, {
	value: 2022,
	label: 2022
}, {
	value: 2023,
	label: 2023
}, {
	value: 2024,
	label: 2024
}, {
	value: 2025,
	label: 2025
}, {
	value: 2026,
	label: 2026
}, {
	value: 2027,
	label: 2027
}, {
	value: 2028,
	label: 2028
}, {
	value: 2029,
	label: 2029
}, {
	value: 2030,
	label: 2030
}]

const weekDay = ['Mon', 'Tue', 'Wed', "Thu", "Fri", "Sat", "Sun"];
const animate = makeAnimated();

function Calendar() {
	const { onCalendarChange, backEndDate } = useContext(Context);
	let [dateMain, setDateMain] = React.useState(backEndDate);
	let [selectedOptionM, setSelectedOptionM] = React.useState(dateMain.getMonth());
	let [selectedOptionY, setSelectedOptionY] = React.useState(dateMain.getFullYear());
	let [classes, setClasses] = React.useState([]);
	const currentDate = new Date();
	const selectedDay = dateMain;
	const date = functions.getMonthDater(selectedOptionY, selectedOptionM);

	function setValueM() {
		return month.find(curr => curr.value === selectedOptionM);
	}
	function setValueY() {
		return year.find(curr => curr.value === selectedOptionY);
	}

	function focus() {
		classes.push('active');
	}

	function blur() {
		setClasses(classes = [])
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

	return (
		<div className='calendar' >
			<div className='calendar__header'>
				<div
					className='calendar__toggle calendar__toggle_l'
					onClick={prevButton}><span>{'<'}</span></div>
				<Select
					classNamePrefix='custom-select'
					className={["calendar__month", classes].join(' ')}
					value={setValueM()}
					onChange={(e) => selectChange(e.value)}
					options={month}
					placeholder='Month'
					onFocus={() => focus()}
					onBlur={() => blur()}
					components={animate}>
				</Select>
				<Select
					classNamePrefix='custom-select'
					className={["calendar__year", classes].join(' ')}
					value={setValueY()}
					onChange={(e) => selectChange(e.value)}
					options={year}
					placeholder='Year'
					onFocus={() => focus()}
					onBlur={() => blur()}>
				</Select>
				<div
					className='calendar__toggle calendar__toggle_r'
					onClick={nextButton}><span>{'>'}</span></div>
			</div>
			<div className='calendar__table'>
				<table>
					<thead className='calendar__head'>
						<tr>{weekDay.map((name, i) => <th key={i}>{name}</th>)}</tr>
					</thead>
					<tbody>{date.map((week, i) => <tr key={i} className='calendar__week'>{week.map((day, i) => day ?
						<td
							className={classnames('calendar__day', {
								'active': functions.equal(day, currentDate),
								'selected': functions.equal(day, selectedDay)
							})}
							key={i}
							onClick={() => dayClick(day)}>{day.getDate()}</td> : <td key={i}></td>)
					}</tr>)}</tbody>
				</table>
			</div>
		</div >
	)
}

export default Calendar;