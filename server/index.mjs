import express from 'express';
import cors from 'cors';
import { sendFile } from './lib/sendFile.mjs';
import fs from 'fs';
import { terminate } from './lib/terminate.mjs';
import { SERVER_PORT, ERRORS } from './constants.mjs';
import '../types.mjs';

const app = express();
const port = process.env.PORT || SERVER_PORT;

/**
 * Middleware
 * NOTE: Access Control Allow Origin will need to be modified if frontend server port changes
 */
app.use(express.json());
app.use(express.urlencoded());
app.use((req, res, next) => {
  res.header({ 'Access-Control-Allow-Origin': 'http://localhost:3000' });
  res.header({
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
  });
  res.header({
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  });
  next();
});

/**
 * Prepare server to respond to requests
 */
app.listen(port, () => {
  console.log(`Scheduling App listening on port ${port}`);
});

/**
 * Default Route - Return Hello World
 */
app.get('/', /** @type {any} */ (cors()), (req, res) => {
  res.send('Hello World!');
});

/**
 * Schedule Route - Return Schedule
 */
app.use('/calendar', /** @type {any} */ (cors()), async (req, res) => {
  const { start, end } = req.query;
  // Ensure we have a start and end date
  if (!start) {
    res
      .status(ERRORS.INVALID_INPUT)
      .send(`Post request needs to include 'start' parameter`);
    return;
  }
  if (!end) {
    res
      .status(ERRORS.INVALID_INPUT)
      .send(`Post request needs to include 'end' parameter`);
    return;
  }

  // serve schedule from file
  sendFile('./calendar.json', res);
});

app.get(
  '/test/start/:start/end/:end',
  /** @type {any} */ (cors()),
  async (req, res) => {
    const { start, end } = req.params;
    // Ensure we have a start and end date
    if (!start) {
      res
        .status(ERRORS.INVALID_INPUT)
        .send(`Post request needs to include 'start' parameter`);
      return;
    }
    if (!end) {
      res

        .status(ERRORS.INVALID_INPUT)
        .send(`Post request needs to include 'end' parameter`);
      return;
    }

    fs.readFile('./calendar.json', (err, data) => {
      if (err) {
        res.status(ERRORS.FILE_NOT_FOUND).send('File not found');
        return;
      }

      const schedule = JSON.parse(data.toString());
      const filteredSchedule = schedule.filter(
        (/** @type {CalendarDay} */ calendarDay) =>
          calendarDay.dayKey >= parseInt(start, 10) &&
          calendarDay.dayKey <= parseInt(end, 10) &&
          calendarDay.dayKey <= parseInt(end, 10),
      );
      res.send(filteredSchedule);
    });
  },
);

/**
 * Roster Route - Return all members
 */
app.use('/roster', /** @type {any} */ (cors()), async (req, res) => {
  sendFile('./roster.json', res);
});

/**
 * User Route - Return a member
 */
app.get('/user/:userid', /** @type {any} */ (cors()), (req, res) => {
  const { userid } = req.params;
  fs.readFile('./roster.json', (err, data) => {
    if (err) {
      res.status(ERRORS.INTERNAL_ERROR).send(err);
      return;
    }
    const roster = JSON.parse(data.toString());

    const user = roster.find(
      (/** @type {Member} */ member) => member.id === parseInt(userid, 10),
    );
    if (!user) {
      res.status(ERRORS.NOT_FOUND).send(`User ${userid} not found`);
    } else {
      res.send(user);
    }
  });
});

/**
 * Gracefully handle termination
 */
const exitHandler = terminate(app, {
  coredump: false,
  timeout: 500,
});

process.on('uncaughtException', exitHandler(1, 'Unexpected Error'));
process.on('unhandledRejection', exitHandler(1, 'Unhandled Promise'));
process.on('SIGTERM', exitHandler(0, 'SIGTERM'));
process.on('SIGINT', exitHandler(0, 'SIGINT'));
