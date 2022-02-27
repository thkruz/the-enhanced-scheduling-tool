const MS_IN_DAY = 24 * 60 * 60 * 1000;

const getDay0 = () => {
  const day0 = new Date(2022, 0, 1);
  day0.setUTCHours(0, 0, 0, 0);
  return day0;
};

/**
 * Converts a day key to a date object.
 * @param {number} dayKey
 * @returns {Date}
 */
export const dayKey2Date = dayKey => new Date(getDay0().getTime() + dayKey * MS_IN_DAY);

export const date2DayKey = date => Math.floor((date.getTime() - getDay0().getTime()) / MS_IN_DAY);
