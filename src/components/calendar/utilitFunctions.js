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
	console.log(`'sd' ${a.getDate()}`, `'sd' ${b.getDate()}`)
	if (!a || !b) {
		return false;
	} return (
		a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
	)
}