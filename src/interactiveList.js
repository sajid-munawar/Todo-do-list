import updateTodo from './addRemove.js';

const container = document.querySelector('.dynamic-todos');

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('checkbox')) {
    const box = e.target;
    box.addEventListener('change', (e) => {
      const localData = JSON.parse(localStorage.getItem('todos'));
      const { id } = e.target.parentElement;
      if (e.target.parentElement.classList.contains('checked')) {
        localData[id].completed = true;
        e.target.nextElementSibling.nextElementSibling.style.display = 'none';

        localStorage.setItem('todos', JSON.stringify(localData));
      } else if (!e.target.parentElement.classList.contains('checked')) {
        localData[id].completed = false;
        e.target.nextElementSibling.style.textDecoration = 'none';
        e.target.nextElementSibling.nextElementSibling.style.display = 'block';
        localStorage.setItem('todos', JSON.stringify(localData));
      }
    });
  }
});

const clearAll = () => {
  let localData = JSON.parse(localStorage.getItem('todos'));
  localData = localData.filter((d) => d.completed === false);
  for (let i = 0; i < localData.length; i += 1) {
    localData[i].index = i;
  }
  localStorage.setItem('todos', JSON.stringify(localData));
  updateTodo();
};

const localData = JSON.parse(localStorage.getItem('todos'));
for (let i = 0; i < localData.length; i += 1) {
  const domItems = document.querySelectorAll('.todo-item');
  if (localData[i].completed === true) {
    domItems[i].classList.add('checked');
    domItems[i].lastChild.classList.add('trash');
    domItems[
      i
    ].firstElementChild.nextElementSibling.nextElementSibling.style.display = 'none';
    domItems[i].firstElementChild.setAttribute('checked', 'true');
  }
}

export default clearAll;
