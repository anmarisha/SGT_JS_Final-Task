document
    .getElementById('add-new-task')
    .addEventListener('click', function() {
        const taskInput = document.getElementById('todo-name');
        taskInput.classList.remove('border')
        taskInput.classList.remove('border-danger')

        if (taskInput.value == '') {
            taskInput.classList.add('border')
            taskInput.classList.add('border-danger')
            return false;
        }
        const newTask = `<li class="list-group-item">${taskInput.value}</li>`;

        document
            .getElementById('tasks-list')
            .innerHTML += newTask;

        taskInput.value = '';
    });