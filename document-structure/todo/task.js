const form = document.querySelector('#tasks__form');
const tasksList = document.querySelector('#tasks__list')

let tasksSaved = localStorage.getItem('tasks');
if (!tasksSaved) {
    tasksSaved = [];
} else {
    tasksSaved = JSON.parse(tasksSaved);
}

tasksSaved.forEach(task => {
    insertLine(task);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = form.elements['task__input'].value;
    tasksSaved.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasksSaved));
    insertLine(task);
})

function insertLine(line) {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task');
    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task__title');
    taskTitle.textContent = line;
    const taskRemove = document.createElement('a');
    taskRemove.classList.add('task__remove');
    taskRemove.innerHTML = '&times';
    tasksList.append(taskItem);
    taskItem.append(taskTitle);
    taskItem.append(taskRemove);
    form.reset();
    form.elements['task__input'].focus();

    taskRemove.addEventListener('click', (e) => {
        e.preventDefault();
        let text = taskItem.querySelector('.task__title').textContent;
        let index = tasksSaved.findIndex(task => task === text);
        tasksSaved.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasksSaved));
        taskItem.remove();
    }, {once: true})
}