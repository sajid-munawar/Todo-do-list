const form = document.querySelector('form');
const dynamicTodos = document.querySelector('.dynamic-todos');

export const todos = [];

const todoGenerate = ({ description }) => `
   <div class="todo-item">
  <input  type="checkbox" class='checkbox'><span contenteditable="true"> ${description} </span>
  <i class="fa-solid fa-ellipsis-vertical"></i>
  <i class="fa-solid fa-trash-can"></i></div>`;

// const changeTask = (todoContainer, todo) => {
//   const editInput = document.createElement('input');
//   editInput.type = 'text';
//   editInput.className = 'editInput';
//   editInput.value = todo.textContent;
//   todoContainer.replaceChild(editInput, todo);
//   editInput.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') {
//       const todoContainers = document.querySelectorAll('.todo-item');
//       const localData = JSON.parse(localStorage.getItem('todos'));
//       for (let i = 0; i < todoContainers.length; i += 1) {
//         if (todoContainers[i].classList.contains('edit-clicked')) {
//           localData[i].description = editInput.value;
//           localStorage.setItem('todos', JSON.stringify(localData));
//         }
//       }
//       editInput.parentElement.classList.remove('edit-clicked');
//       todoContainer.replaceChild(todo, editInput);
//       todo.textContent = editInput.value;
//     }
//   });
// };


export const updateTodo = () => {
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

  const spans = document.querySelectorAll('span')
  spans.forEach(span => {
    span.addEventListener('click', (e) => {
      e.target.classList.remove('focus')
    })
    span.addEventListener('keypress', (e) => {
      if (e.key === "Enter") {
        // console.log(e.target.textContent);
        e.target.parentElement.classList.add("edited");
      }
            const localData = JSON.parse(localStorage.getItem('todos'));

      // const todoContainers = document.querySelectorAll('.todo-item');
      for (let i = 0; i < spans.length; i += 1) {
        if (spans[i].parentElement.classList.contains("edited")) {
          console.log(e.target.textContent);
          localData[i].description = e.target.textContent;
          localStorage.setItem('todos', JSON.stringify(localData));
      // e.target.contenteditable = "false";

      window.getSelection().removeAllRanges();
        }
      }
      e.target.parentElement.classList.remove('edited');
      e.target.classList.add('focus')
      // updateTodo();
    })

  })
  // const editIcons = document.querySelectorAll('.fa-ellipsis-vertical');
  // editIcons.forEach((c) => {
  //   c.addEventListener('click', () => {
  //     const todoContainer = c.parentElement;
  //     todoContainer.classList.add('edit-clicked');
  //     changeTask(todoContainer, c.previousElementSibling);
  //   });
  // });
};
updateTodo();

export const addTodo = () => {
  if (form.add.value.trim()) {
const todosFromLocalStorage = JSON.parse(localStorage.getItem("todos"));

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
