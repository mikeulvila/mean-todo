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

router.post('/todos', (req, res) => {
  const todo = req.body;
  Todo.create(todo, (err, todo) => {
    if (err) {
      return res.status(500).json({err: err.message});
    }
    res.json({todo: todo, message: 'Todo created.'});
  });
});

router.put('/todos/:id', (req, res) => {
  const id = req.params.id;
  const todo = req.body;
  if (todo && todo._id !== id) {
    return res.status(500).json({err: 'Id does not match.'});
  }
  Todo.findByIdAndUpdate(id, todo, {new: true}, (err, todo) => {
    if (err) {
      return res.status(500).json({err: err.message});
    }
    res.json({todo: todo, message: 'Todo updated.'});
  });
});

// add delete to delete

module.exports = router;
