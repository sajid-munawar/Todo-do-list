export const checkboxs = document.querySelectorAll('.checkbox')

const localData = JSON.parse(localStorage.getItem('todos'))


checkboxs.forEach(c => {
    c.addEventListener('change', (e) => {
        let id = e.target.parentElement.id;
        if (e.target.parentElement.classList.contains('checked')) {
            localData[id].completed = true;
            localStorage.setItem('todos',JSON.stringify(localData))
        } else 
            if (!e.target.parentElement.classList.contains('checked')) {
                  localData[id].completed = false;
                  localStorage.setItem("todos", JSON.stringify(localData));
            }
    })
})

export const clearAll = () => {
    
}