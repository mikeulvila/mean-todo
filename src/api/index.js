'use strict';

const express = require('express');

const router = express.Router();

router.get('/todos', (req, res) => {
  res.send('These are the todos');
})

// TODO: add POST route for new entries
// add put route to update
// add delete to delete

module.exports = router;
