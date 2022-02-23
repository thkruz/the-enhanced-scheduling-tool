/**
 * @typedef {object} Member
 * @property {number} id - The id of the member
 * @property {string} first - First name of the member
 * @property {string} last - Last name of the member
 * @property {'day'|'swing'|'mid'|null} preference - Which shift the member prefers
 * @property {DayKey[]} nonavail - The shifts the days the member is unavailable
 */

/** @typedef {Member[]} Roster */
/** @typedef {number} DayKey - The number of days since January 1st, 2022 */
/** @typedef {'day' | 'swing' | 'mid'} ShiftType */

/**
 * @typedef {object} Shift
 * @property {DayKey} dayKey - The number of days since January 1st, 2022
 * @property {ShiftType} shift - The shift type
 * @property {Member[]} members - The members assigned to the shift
 * @property {boolean} [isConflict] - Flag if there is an issue with someone scheduled for this shift
 */

/**
 * @typedef {object} CalendarDay
 * @property {DayKey} dayKey - The number of days since January 1st, 2022
 * @property {Shift} shift1 - The 1st shift
 * @property {Shift} shift2 - The 2nd shift
 * @property {Shift} [shift3] - The 3rd shift
 * @property {Shift} [shift4] - The 4th shift
 * @property {Shift} [shift5] - The 5th shift
 * @property {boolean} [isConflict] - Flag if there is an issue with someone scheduled for this day
 */

/** @typedef {CalendarDay[]} Calendar */
