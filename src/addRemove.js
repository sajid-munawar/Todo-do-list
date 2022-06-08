const form = document.querySelector('form');
const dynamicTodos = document.querySelector('.dynamic-todos');


export const todos = [];

const todoGenerate = ({ description }) => `
   <div class="todo-item">
  <input  type="checkbox" class='checkbox'><span> ${description} </span>
  <i class="fa-solid fa-ellipsis-vertical"></i>
  <i class="fa-solid fa-trash-can"></i></div>`;

const todosFromLocalStorage = JSON.parse(localStorage.getItem('todos'));

export const updateTodo = () => {
  if (todosFromLocalStorage) {
    dynamicTodos.innerHTML = todosFromLocalStorage.map((todo) => todoGenerate(todo)).join('');
  } else {
    dynamicTodos.innerHTML = todos.map((todo) => todoGenerate(todo)).join('');
    localStorage.setItem('todos', JSON.stringify(todos));
  }
    const checkboxs = document.querySelectorAll('.checkbox')
    checkboxs.forEach(c => {
        c.addEventListener('click', () => {
          c.parentElement.classList.toggle("checked");
          c.nextElementSibling.classList.toggle("checkTodo");
          c.nextElementSibling.nextElementSibling.classList.toggle('doticon')
          c.nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle('trash')
        })
    })
};
updateTodo();

export const addTodo = () => {
  if (form.add.value.trim()) {
    if (todosFromLocalStorage) {
      todosFromLocalStorage.push({
        description: `${form.add.value}`,
        completed: false,
        index: todos.length,
      });
      localStorage.setItem('todos', JSON.stringify(todosFromLocalStorage));
      updateTodo();
    } else {
      todos.push({
        description: `${form.add.value}`,
        completed: false,
        index: todos.length,
      });
      localStorage.setItem('todos', JSON.stringify(todos));
      updateTodo();
    }
  }
};

