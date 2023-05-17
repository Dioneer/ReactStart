import './calendar.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import * as functions from './utilitFunctions.js';
import classnames from 'classnames';
import { useCalendar } from './useCalendar';

export const animate = makeAnimated();

function Calendar() {
	const { setValueM, setValueY, focus, blur, prevButton, nextButton, selectChange, dayClick, currentDate, selectedDay, date, classes } = useCalendar();

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
					value={setValueM()}
					onChange={(e) => selectChange(e.value)}
					options={functions.month}
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
			<div className='calendar__table text-neutral-100 text-center'>
				<table>
					<thead className='calendar__head text-center'>
						<tr className='text-center py-0 px-1.5'>{functions.weekDay.map((name, i) => <th className='text-center py-0 px-1.5'
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