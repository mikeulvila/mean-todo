'use strict';

const express = require('express');
//const todos = require('../../mock/todos.json');
const Todo = require('../models/todo.js');

const router = express.Router();


router.get('/todos', (req, res) => {
  Todo.find({}, (err, todos) => {
    if (err) {
      return res.status(500).json({message: err.message});
    }

    res.json({todos: todos});
  })
})

// TODO: add POST route for new entries
// add put route to update
// add delete to delete

module.exports = router;
