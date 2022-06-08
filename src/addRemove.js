const form = document.querySelector('form');
const dynamicTodos = document.querySelector(".dynamic-todos");

export const todos = [];

const todoGenerate = ({ description }) => `
   <div class="todo-item">
  <input  type="checkbox"><span contenteditable="true" > ${description} </span></div>`;
  
  const todosFromLocalStorage=JSON.parse(localStorage.getItem('todos'))
  
  export const updateTodo = () => {
    if (todosFromLocalStorage) {
  dynamicTodos.innerHTML = todosFromLocalStorage.map((todo) => todoGenerate(todo)).join("");
        
    } else {
        
        dynamicTodos.innerHTML = todos.map((todo) => todoGenerate(todo)).join("");
        localStorage.setItem('todos',JSON.stringify(todos))
    }
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
        localStorage.setItem("todos", JSON.stringify(todosFromLocalStorage));
        updateTodo();
      } else {
        todos.push({
          description: `${form.add.value}`,
          completed: false,
          index: todos.length,
        });
        localStorage.setItem("todos", JSON.stringify(todos));
        updateTodo();
      }
    }
    
   
}

