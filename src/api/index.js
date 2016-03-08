'use strict';

const express = require('express');
const todos = require('../../mock/todos.json');

const router = express.Router();


router.get('/todos', (req, res) => {
  res.json({todos: todos});
})

// TODO: add POST route for new entries
// add put route to update
// add delete to delete

module.exports = router;
