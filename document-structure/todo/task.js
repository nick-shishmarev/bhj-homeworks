const form = document.querySelector('#tasks__form');
const tasksList = document.querySelector('.tasks__list')

let tasksSaved = JSON.parse(localStorage.getItem('tasks')) || [];

tasksSaved.forEach(task => {
    insertLine(task);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = form.elements['task__input'].value;
    if (task.trim()) {
        tasksSaved.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasksSaved));
        insertLine(task);
    }
    form.reset();
    form.elements['task__input'].focus();
})

function insertLine(line) {
    tasksList.insertAdjacentHTML('beforeend', 
    ` <div class="task"> 
        <div class="task__title"> ${line} </div> 
        <a href="#" class="task__remove">&times;</a> 
    </div> `);

    const taskItems = [...tasksList.querySelectorAll('.task')]
    const taskItem = taskItems[taskItems.length - 1];
    const taskRemove = taskItem.querySelector('.task__remove');

    taskRemove.addEventListener('click', (e) => {
        e.preventDefault();
        let text = taskItem.querySelector('.task__title').textContent;
        let index = tasksSaved.findIndex(task => task === text);
        tasksSaved.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasksSaved));
        taskItem.remove();
        form.elements['task__input'].focus();
    }, {once: true})
}