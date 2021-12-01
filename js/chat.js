document
    .getElementById('add-new-msg')
    .addEventListener('click', function() {
        const msgInput = document.getElementById('new-msg');
        msgInput.classList.remove('border')
        msgInput.classList.remove('border-danger')

        const usernameInput = document.getElementById('username');
        usernameInput.classList.remove('border')
        usernameInput.classList.remove('border-danger')        

        if (msgInput.value == '' || usernameInput.value == '') {
            msgInput.classList.add('border')
            msgInput.classList.add('border-danger')
            usernameInput.classList.add('border')
            usernameInput.classList.add('border-danger')

            return false;
        }
        const newMessage = `<li class="list-group-item">
        <div class="col-9">
        <p>${usernameInput.value}</p>
        
        <p>${msgInput.value}</p>
        
    </div>

        </li>`;

        document
            .getElementById('chat')
            .innerHTML += newMessage;

        taskInput.value = '';
    });
