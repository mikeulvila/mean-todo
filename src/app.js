'use strict';

const express = require('express');

const app = express();

app.use('/', express.static('public'));

const router = express.Router();

router.get('/api/todos', (req, res) => {
  res.send('These are the todos');
})

// TODO: add POST route for new entries
// add put route to update
// add delete to delete

app.use('/api', router);

app.listen(3000, () => {
  console.log('Server running on port 3000.');
});


