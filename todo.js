document.getElementById('addButton').addEventListener('click', function() {
    const input = document.getElementById('todoInput');
    const todoText = input.value;

    if (todoText) {
        const li = document.createElement('li');
        li.textContent = todoText;

        document.getElementById('todoList').appendChild(li);

        input.value = '';
    }
});