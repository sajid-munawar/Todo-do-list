import './style.css';
import { addTodo } from './addRemove.js';
import clearAll from './interactiveList.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo();
  form.reset();
});

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
  clearAll();
});