'use strict';

const express = require('express');

const app = express();

const router = require('./api')

app.use('/', express.static('public'));

app.use('/api', router);

app.listen(3000, () => {
  console.log('Server running on port 3000.');
});


