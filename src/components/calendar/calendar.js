import './calendar.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import * as functions from './utilitFunctions.js';
import classnames from 'classnames';
import { useCalendar } from './useCalendar';
import { useTranslation } from "react-i18next";

export const animate = makeAnimated();

function Calendar() {
	const { selectFindHolderM, selectFindHolderY, focus, blur, prevButton, nextButton, selectChange, dayClick, currentDate, selectedDay, date, classes } = useCalendar();
	const { t } = useTranslation();

	return (
		<div className='calendar' >
			<div className='calendar__header'>
				<div
					className='calendar__toggle calendar__toggle_l'
					onClick={prevButton}>
					<span>{'<'}</span></div>
				<Select
					classNamePrefix='custom-select'
					className={classnames("calendar__month", { active: classes })}
					value={selectFindHolderM()}
					onChange={(e) => selectChange(e.value)}
					options={t('main.month', { returnObjects: true })}
					placeholder='Month'
					onFocus={() => focus()}
					onBlur={() => blur()}
					components={animate}>
				</Select>
				<Select
					classNamePrefix='custom-select'
					className={["calendar__year", classes].join(' ')}
					value={selectFindHolderY()}
					onChange={(e) => selectChange(e.value)}
					options={functions.year}
					placeholder='Year'
					onFocus={() => focus()}
					onBlur={() => blur()}>
				</Select>
				<div
					className='calendar__toggle calendar__toggle_r'
					onClick={nextButton}>
					<span>{'>'}</span>
				</div>
			</div>
			<div className='calendar__table'>
				<table>
					<thead className='calendar__head'>
						<tr className='text-center'>{t('main.weekDay', { returnObjects: true }).map((name, i) => <th className='text-center py-0 px-1.5'
							key={i}>{name}</th>)}</tr>
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