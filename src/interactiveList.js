import  updateTodo  from "./addRemove.js";
const container = document.querySelector('.dynamic-todos');

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('checkbox')) {
    const box = e.target;
    box.addEventListener('change', (e) => {
      const localData = JSON.parse(localStorage.getItem('todos'));
      const { id } = e.target.parentElement;
      if (e.target.parentElement.classList.contains('checked')) {
        localData[id].completed = true;
        localStorage.setItem('todos', JSON.stringify(localData));
      } else if (!e.target.parentElement.classList.contains('checked')) {
        localData[id].completed = false;
        localStorage.setItem('todos', JSON.stringify(localData));
      }
    });
  }
});

// export const checkboxs = document.querySelectorAll(".checkbox");

// checkboxs.forEach((c) => {
//   c.
// });

const clearAll = () => {
  let localData = JSON.parse(localStorage.getItem('todos'));
    localData = localData.filter((d) => d.completed === false);
            for (let i = 0; i < localData.length; i += 1) {
              localData[i].index = i;
            }
    localStorage.setItem('todos', JSON.stringify(localData));
    updateTodo();
};

export default clearAll;
