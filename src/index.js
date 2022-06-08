import './style.css';

const dynamicTodos = document.querySelector('.dynamic-todos');

const todos = [
  {
    description: 'Coding task',
    completed: false,
    index: 0,
  },
  {
    description: 'Lesson',
    completed: true,
    index: 1,
  },
  {
    description: 'review',
    completed: false,
    index: 2,
  },
];

const todoGenerate = ({ description }) => `
   <div class="todo-item">
  <input type="checkbox"><span> ${description} </span></div>`;

dynamicTodos.innerHTML += todos.map((todo) => todoGenerate(todo)).join('');
