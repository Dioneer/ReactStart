const DAYSINMONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export function getMonthDater(year, month) {
	const result = [];
	const date = new Date(year, month);
	const daysInMonth = getDaysInMonth(date);
	const startOn = getStartOn(date);

	let day = 1;
	// 7 - days in week
	for (let i = 0; i < (daysInMonth + startOn) / 7; i++) {
		result[i] = [];
		for (let j = 0; j < 7; j++) {
			if ((startOn > 0 && i === 0 && j < startOn) || day > daysInMonth) {
				result[i][j] = undefined;
			} else { result[i][j] = new Date(year, month, day++) }
		}
	}
	return result;
}

function getDaysInMonth(date) {
	const month = date.getMonth();
	const year = date.getFullYear();
	// 1 - febriary
	if (isLeapYear(year) && month === 1) {
		return DAYSINMONTH[month] + 1;
	}
	else { return DAYSINMONTH[month]; }
}

function isLeapYear(year) {
	return !((year % 4) || (!(year % 100) && (year % 400)));
}

function getStartOn(date) {
	const dayOfWeek = date.getDay();
	// 6 - sunday
	if (dayOfWeek === 0) return 6;

	return dayOfWeek - 1;
}
export function equal(a, b) {
	if (!a || !b) {
		return false;
	} return (
		a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
	)
}

export const month = [
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
export const year = [{
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
export const weekDay = ['Mon', 'Tue', 'Wed', "Thu", "Fri", "Sat", "Sun"];
