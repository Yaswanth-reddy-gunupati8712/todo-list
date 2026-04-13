let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
      <div>
        <input type="checkbox" ${task.completed ? "checked" : ""} 
        onchange="toggleTask(${index})">
        <span style="text-decoration:${task.completed ? "line-through" : "none"}">
          ${task.text}
        </span>
      </div>
      <button onclick="deleteTask(${index})">❌</button>
    `;

    list.appendChild(li);
  });
}

function addTask() {
  let input = document.getElementById("taskInput");

  if (input.value.trim() === "") return;

  tasks.push({ text: input.value, completed: false });
  input.value = "";

  saveTasks();
  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;

  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);

  saveTasks();
  renderTasks();
}

renderTasks();