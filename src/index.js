import './style.css';
import { addTodo } from './addRemove.js';
import clearAll from './interactiveList.js';

const enterItem = document.querySelector('.bi-arrow-return-left');

const form = document.querySelector('form');

enterItem.addEventListener('click', (e) => {
  e.preventDefault();
  addTodo();
  form.reset();
});

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
  clearAll();
});