'use strict';

const express = require('express');

const router = require('./api/index.js');

const app = express();

require('./database.js');
require('./seed.js');

app.use('/', express.static('public'));

app.use('/api', router);

app.listen(3000, () => {
  console.log('Server running on port 3000.');
});


