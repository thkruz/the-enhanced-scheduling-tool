import express from 'express';
import cors from 'cors';
import { sendFile } from './sendFile.mjs';
import fs from 'fs';
const app = express();
const port = process.env.PORT || 3001;

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
app.get('/', cors(), (req, res) => {
  res.send('Hello World!');
});

/**
 * Schedule Route - Return Schedule
 */
app.use('/calendar', cors(), async (req, res) => {
  const { start, end } = req.query;
  // Ensure we have a start and end date
  if (!start) {
    res.status(400).send(`Post request needs to include 'start' parameter`);
    return;
  }
  if (!end) {
    res.status(400).send(`Post request needs to include 'end' parameter`);
    return;
  }

  // serve schedule from file
  sendFile('./schedule.json', res);
});

/**
 * Roster Route - Return all members
 */
app.use('/roster', cors(), async (req, res) => {
  sendFile('./roster.json', res);
});

/**
 * User Route - Return a member
 */
app.get('/user/:userid', cors(), (req, res) => {
  const { userid } = req.params;
  fs.readFile('./roster.json', (err, data) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    const roster = JSON.parse(data);
    const user = roster.find((member) => member.id === parseInt(userid));
    if (!user) {
      res.status(404).send(`User ${userid} not found`);
    } else {
      res.send(user);
    }
  });
});
