import '../types.mjs';
import fs from 'fs';

/** @type {Roster} */
const roster = [
  {
    id: 1,
    first: 'John',
    last: 'Doe',
    preference: 'day',
    nonavail: [],
  },
  {
    id: 2,
    first: 'Jane',
    last: 'Doe',
    preference: 'swing',
    nonavail: [],
  },
  {
    id: 3,
    first: 'Jack',
    last: 'Doe',
    preference: 'mid',
    nonavail: [],
  },
  {
    id: 4,
    first: 'Jill',
    last: 'Doe',
    preference: 'day',
    nonavail: [],
  },
  {
    id: 5,
    first: 'Joe',
    last: 'Doe',
    preference: 'swing',
    nonavail: [],
  },
  {
    id: 6,
    first: 'Jenny',
    last: 'Doe',
    preference: 'mid',
    nonavail: [],
  },
  {
    id: 7,
    first: 'Jim',
    last: 'Doe',
    preference: 'day',
    nonavail: [],
  },
  {
    id: 8,
    first: 'Janet',
    last: 'Doe',
    preference: 'swing',
    nonavail: [],
  },
  {
    id: 9,
    first: 'Jackie',
    last: 'Doe',
    preference: 'mid',
    nonavail: [],
  },
  {
    id: 10,
    first: 'Juan',
    last: 'Doe',
    preference: 'day',

    nonavail: [],
  },
  {
    id: 11,
    first: 'Joey',
    last: 'Doe',
    preference: 'swing',
    nonavail: [],
  },
  {
    id: 12,
    first: 'Julia',
    last: 'Doe',
    preference: 'mid',
    nonavail: [],
  },
];

for (const member of roster) {
  const JAN1 = new Date('1/1/2022').setUTCHours(0, 0, 0, 0);
  member.nonavail.push(JAN1 + 1000 * 60 * 60 * 24 * Math.floor(Math.random() * 31));
  member.nonavail.push(JAN1 + 1000 * 60 * 60 * 24 * Math.floor(Math.random() * 31));
  member.nonavail.push(JAN1 + 1000 * 60 * 60 * 24 * Math.floor(Math.random() * 31));
  member.nonavail.push(JAN1 + 1000 * 60 * 60 * 24 * Math.floor(Math.random() * 31));
}

fs.writeFileSync('roster.json', JSON.stringify(roster, null, 2));

const generateCalendar = (roster, start, end) => {
  const calendar = [];
  let crewIndex = 0;
  for (let i = start; i <= end; i++) {
    const dayCrew = roster.filter(member => member.preference === 'day');
    const swingCrew = roster.filter(member => member.preference === 'swing');
    const midCrew = roster.filter(member => member.preference === 'mid');

    /** @type {CalendarDay} */
    const calendarDay = {
      dayKey: i,
      shift1: {
        dayKey: i,
        shift: 'day',
        members: [dayCrew[crewIndex], dayCrew[crewIndex + 1]],
      },
      shift2: {
        dayKey: i,
        shift: 'swing',
        members: [swingCrew[crewIndex], swingCrew[crewIndex + 1]],
      },
      shift3: {
        dayKey: i,
        shift: 'mid',
        members: [midCrew[crewIndex], midCrew[crewIndex + 1]],
      },
    };

    if (calendarDay.shift1.members[0].nonavail.includes(calendarDay.dayKey)) calendarDay.shift1.isConflict = true;
    calendarDay.isConflict = true;
    if (calendarDay.shift1.members[1].nonavail.includes(calendarDay.dayKey)) calendarDay.shift1.isConflict = true;
    calendarDay.isConflict = true;
    if (calendarDay.shift2.members[0].nonavail.includes(calendarDay.dayKey)) calendarDay.shift2.isConflict = true;
    calendarDay.isConflict = true;
    if (calendarDay.shift2.members[1].nonavail.includes(calendarDay.dayKey)) calendarDay.shift2.isConflict = true;
    calendarDay.isConflict = true;
    if (calendarDay.shift3.members[0].nonavail.includes(calendarDay.dayKey)) calendarDay.shift3.isConflict = true;
    calendarDay.isConflict = true;
    if (calendarDay.shift3.members[1].nonavail.includes(calendarDay.dayKey)) calendarDay.shift3.isConflict = true;
    calendarDay.isConflict = true;

    calendar.push(calendarDay);
    crewIndex += 2;
    if (crewIndex >= dayCrew.length) {
      crewIndex = 0;
    }
  }
  return calendar;
};

/** @type {Calendar} */
const calendar = generateCalendar(roster, 1, 31);

fs.writeFileSync('./calendar.json', JSON.stringify(calendar, null, 2));
