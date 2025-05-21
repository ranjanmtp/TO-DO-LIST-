function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    ${taskText}
    <button onclick="editTask(this)">Edit</button>
    <button onclick="deleteTask(this)">Delete</button>
  `;
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

function editTask(button) {
  const li = button.parentElement;
  const currentText = li.firstChild.textContent.trim();
  const newText = prompt("Edit task:", currentText);
  if (newText !== null && newText.trim() !== "") {
    li.firstChild.textContent = newText + " ";
  }
}

function deleteTask(button) {
  const li = button.parentElement;
  li.remove();
}