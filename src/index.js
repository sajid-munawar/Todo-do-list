import './style.css';
import { addTodo } from './addRemove.js';
import { clearAll } from './interactiveList';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo();
  form.reset();
});

clearAll();