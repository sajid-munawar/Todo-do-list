import './style.css';
import {addTodo,updateTodo } from './addRemove';
const form = document.querySelector("form");




form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
  form.reset()
});