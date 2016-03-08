'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-todo', (err) => {
  if (err) throw err;
  console.log('Connected to MongoDB');
});
