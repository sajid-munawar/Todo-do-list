const form = document.querySelector('form');
const dynamicTodos = document.querySelector('.dynamic-todos');

export const todos = [];
export const todoGenerate = ({ description, index }) => `
   <div class="todo-item" id=${index}>
  <input  type="checkbox" class='checkbox'><span contenteditable="true"> ${description} </span>
  <i class="fa-solid fa-ellipsis-vertical"></i>
  <i class="fa-solid fa-trash-can"></i></div>`;

const updateTodo = () => {
  const todosFromLocalStorage = JSON.parse(localStorage.getItem('todos'));
  if (todosFromLocalStorage) {
    dynamicTodos.innerHTML = todosFromLocalStorage.map((todo) => todoGenerate(todo)).join('');
  } else {
    dynamicTodos.innerHTML = todos.map((todo) => todoGenerate(todo)).join('');
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  const checkboxs = document.querySelectorAll('.checkbox');
  checkboxs.forEach((c) => {
    c.addEventListener('click', () => {
      c.parentElement.classList.toggle('checked');
      c.nextElementSibling.classList.toggle('checkTodo');
      c.nextElementSibling.nextElementSibling.classList.toggle('doticon');
      c.nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle('trash');
    });
  });

  // Function to edit description
  const editDesc = () => {
    const spans = document.querySelectorAll('span');
    spans.forEach((span) => {
      span.addEventListener('click', (e) => {
        e.target.classList.remove('focus');
      });
      span.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          e.target.parentElement.classList.add('edited');
        }
        const localData = JSON.parse(localStorage.getItem('todos'));

        for (let i = 0; i < spans.length; i += 1) {
          if (spans[i].parentElement.classList.contains('edited')) {
            localData[i].description = e.target.textContent;
            localStorage.setItem('todos', JSON.stringify(localData));

            window.getSelection().removeAllRanges();
          }
        }
        e.target.parentElement.classList.remove('edited');
        e.target.classList.add('focus');
      });
    });
  };
  editDesc();
  // Function to Delete todo
  const delTodo = () => {
    const trashs = document.querySelectorAll('.fa-trash-can');
    trashs.forEach((trash) => {
      trash.addEventListener('click', (e) => {
        e.preventDefault();
        const dindex = +e.target.parentElement.id;
        dynamicTodos.removeChild(e.target.parentElement);
        const localData = JSON.parse(localStorage.getItem('todos'));
        const localDataArr = Array.from(localData);
        for (let b = 0; b < localDataArr.length; b += 1) {
          if (localDataArr[b].index === dindex) {
            localDataArr.splice(b, 1);
          }
        }

        for (let i = 0; i < localDataArr.length; i += 1) {
          localDataArr[i].index = i;
        }
        localStorage.setItem('todos', JSON.stringify(localDataArr));
        const domItems = document.querySelectorAll('.todo-item');
        for (let i = 0; i < domItems.length; i += 1) {
          domItems[i].id = i;
        }

        e.stopPropagation();
      });
    });
  };
  delTodo();
};
updateTodo();

export const addTodo = () => {
  if (form.add.value.trim()) {
    const todosFromLocalStorage = JSON.parse(localStorage.getItem('todos'));

    if (todosFromLocalStorage) {
      todosFromLocalStorage.push({
        description: `${form.add.value}`,
        completed: false,
        index: todosFromLocalStorage.length,
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

export default updateTodo;