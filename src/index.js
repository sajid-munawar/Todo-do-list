import _ from "lodash";
import "./style.css";

const form = document.querySelector("form");
const dynamicTodos = document.querySelector(".dynamic-todos");

const todos = [
  {
    description: "Coding task",
    completed: false,
    index: 0,
  },
  {
    description: "Lesson",
    completed: true,
    index: 1,
  },
  {
    description: "review",
    completed: false,
    index: 2,
  },
];

todos.forEach(todo => {
  return (dynamicTodos.innerHTML += `
   <div class="todo-item">
  <input type="checkbox"><span> ${todo.description} </span></div>`);
})