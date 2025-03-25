const taskList = document.getElementById("taskList");

function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((task) => {
    const listItem = createTaskItem(task.text, task.completed);
    taskList.appendChild(listItem);
  });
}

function saveTasks() {
  const tasks = [];
  taskList.querySelectorAll("li").forEach((taskItem) => {
    tasks.push({
      text: taskItem.querySelector("span").textContent,
      completed: taskItem.classList.contains("completed"),
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Por favor, insira uma tarefa.");
    return;
  }

  const listItem = createTaskItem(taskText, false);
  taskList.appendChild(listItem);

  taskInput.value = "";
  saveTasks();
}

function createTaskItem(text, completed) {
  const listItem = document.createElement("li");
  if (completed) {
    listItem.classList.add("completed");
  }

  const taskContent = document.createElement("span");
  taskContent.textContent = text;

  const buttons = document.createElement("div");
  buttons.classList.add("buttons");

  const completeButton = document.createElement("button");
  completeButton.textContent = "Concluir";
  completeButton.onclick = () => {
    toggleComplete(listItem);
    saveTasks();
  };

  const editButton = document.createElement("button");
  editButton.textContent = "Editar";
  editButton.onclick = () => startEditTask(listItem, taskContent);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Excluir";
  deleteButton.classList.add("delete-button");
  deleteButton.onclick = () => {
    deleteTask(listItem);
    saveTasks();
  };

  buttons.appendChild(completeButton);
  buttons.appendChild(editButton);
  buttons.appendChild(deleteButton);

  listItem.appendChild(taskContent);
  listItem.appendChild(buttons);

  return listItem;
}

function toggleComplete(taskItem) {
  taskItem.classList.toggle("completed");
  saveTasks();
}

function startEditTask(taskItem, taskContent) {
  const editMode = document.createElement("div");
  editMode.classList.add("edit-mode");

  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.value = taskContent.textContent;

  const saveButton = document.createElement("button");
  saveButton.textContent = "Salvar";
  saveButton.classList.add("save-button");
  saveButton.onclick = () => {
    saveEditTask(taskItem, editMode, taskContent, editInput);
    saveTasks();
  };

  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancelar";
  cancelButton.classList.add("cancel-button");
  cancelButton.onclick = () => cancelEditTask(taskItem, editMode, taskContent);

  editMode.appendChild(editInput);
  editMode.appendChild(saveButton);
  editMode.appendChild(cancelButton);

  taskItem.replaceChild(editMode, taskContent);
}

function saveEditTask(taskItem, editMode, taskContent, editInput) {
  const newText = editInput.value.trim();
  if (newText !== "") {
    taskContent.textContent = newText;
    taskItem.replaceChild(taskContent, editMode);
  } else {
    alert("A tarefa não pode estar vazia.");
  }
}

function cancelEditTask(taskItem, editMode, taskContent) {
  taskItem.replaceChild(taskContent, editMode);
}

function deleteTask(taskItem) {
  taskList.removeChild(taskItem);
}

window.onload = loadTasks;
