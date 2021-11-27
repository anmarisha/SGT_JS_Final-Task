$('#add-new-task').click(function() {
    const $taskInput = $('#todo-name');
    $taskInput
        .removeClass('border')
        .removeClass('border-danger');

    if ($taskInput.val() == '') {
        $taskInput
            .addClass('border')
            .addClass('border-danger');
        return false;
    }
    const newTask = `<li class="list-group-item">${$taskInput.val()}</li>`;
    $('#tasks-list').append(newTask);
    $taskInput.val('');
});