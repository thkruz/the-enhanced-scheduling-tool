/**
 * @typedef {object} Member
 * @property {number} id - The id of the member
 * @property {string} first - First name of the member
 * @property {string} last - Last name of the member
 * @property {'day'|'swing'|'mid'|null} preference - Which shift the member prefers
 * @property {DayKey[]} nonavail - The shifts the days the member is unavailable
 */

/** @typedef {Member[]} Roster */
/** @typedef {CalendarDay[]} Calendar */
/** @typedef {Date} DayKey - Date object set to 00:00:00 UTC on that day */

// NOTE: To create a DayKey use the following logic:
// const dateObj = new Date();
// dateObj.setUTCHours(0, 0, 0, 0);

/** @typedef {'day' | 'swing' | 'mid'} ShiftType */

/**
 * @typedef {object} Shift
 * @property {DayKey} dayKey - Date object set to 00:00:00 UTC on that day
 * @property {ShiftType} shift - The shift type
 * @property {Member[]} members - The members assigned to the shift
 * @property {boolean} [isConflict] - Flag if there is an issue with someone scheduled for this shift
 */

/**
 * @typedef {object} CalendarDay
 * @property {DayKey} dayKey - Date object set to 00:00:00 UTC on that day
 * @property {Shift} shift1 - The 1st shift
 * @property {Shift} shift2 - The 2nd shift
 * @property {Shift} [shift3] - The 3rd shift
 * @property {Shift} [shift4] - The 4th shift
 * @property {Shift} [shift5] - The 5th shift
 * @property {boolean} [isConflict] - Flag if there is an issue with someone scheduled for this day
 */
