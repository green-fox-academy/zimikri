'use strict';

import Domino from './Domino';
import Todo from './Todo';

const dominoes: Domino[] = [];

dominoes.push(new Domino(5, 2));
dominoes.push(new Domino(4, 6));
dominoes.push(new Domino(1, 5));
dominoes.push(new Domino(6, 7));
dominoes.push(new Domino(2 ,4));
dominoes.push(new Domino(7, 1));

const todos: Todo[] = [];

todos.push(new Todo('Buy milk', 'high', true));
todos.push(new Todo('Do homework', 'very high', false));
todos.push(new Todo('Sleep', 'low', false));
todos.push(new Todo('Eat', 'low', false));
todos.push(new Todo('Drink more coffee', 'high', true));

console.log('\nDominoes:');
for (let domino of dominoes) {
    domino.printAllFields();
}

console.log('\nTodos:');
for (let todo of todos) {
    todo.printAllFields();
}
