const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded());

app.listen(port, () => {
  console.log(`Scheduling App listening on port ${port}`);
});

app.get('/', cors(), (req, res) => {
  res.send('Hello World!');
});

app.use('/calendar', cors(), express.static('./calendar.json'));

app.post('/api', cors(), async (req, res) => {
  const { api } = req.body;
  if (api) {
    res.send(JSON.stringify(api));
  } else {
    res.end(JSON.stringify({ error: 'Invalid API Call!' }));
  }
});

app.get('/user/:userid', cors(), (req, res) => {
  const { userid } = req.params;
  if (userid) {
    res.send(JSON.stringify(userid));
  } else {
    res.end(JSON.stringify({ error: 'Invalid User ID!' }));
  }
});
