'use strict';

const angular = require('angular');

angular.module('todoListApp')
.service('dataService', function($http, $q) {
  this.getTodos = function(cb) {
    $http.get('/api/todos').then(cb);
  };

  this.deleteTodo = function(todo) {
    console.log("I deleted the " + todo.name + " todo!");
  };

  this.saveTodos = function(todos) {
    var queue = [];
    todos.forEach((todo) => {
      var request;
      if (!todo._id) {
        request = $http.post('/api/todos', todo);
      } else {
        request = $http.put('/api/todos' + todo._id, todo).then((result) => {
          todo = result.data.todo;
          return todo;
        });
      }
      queue.push(request);
    });
    return $q.all(queue).then((results) => {
      console.log("I saved " + todos.length + " todos!");
    });
  };

});
