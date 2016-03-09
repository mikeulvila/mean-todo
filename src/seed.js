'use strict';

const Todo = require('./models/todo.js');

const todos = [
  'Feed the dog',
  'Walk the kids',
  'Something else'
  ];

todos.forEach((todo, index) => {
  Todo.find({'name': todo}, (err, todos) => {
    if (!err && !todos.length) {
      Todo.create({completed: false, name: todo});
    }
  });

});


