function addTask() {
    const input = document.getElementById('todoInput');
    const task = input.value;

    if (task) {
        const list = document.getElementById('todoList');
        list.innerHTML += `<li>${task} <button onclick="this.parentElement.remove()">Sil</button></li>`;
        input.value = ''; 
    }
else
{
  alert("görev yazmanız gerekiyor");
}
}