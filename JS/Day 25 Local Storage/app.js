let tasks = [];
function addtask() {
  let inputElement = document.getElementById("taskinput");
  let inputtask = inputElement.value;
  let taskli = document.getElementById("tasklist");

  let newtask = document.createElement("li");

  newtask.innerHTML = inputtask;

  tasks.push(inputtask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log(localStorage.getItem("tasks"));
  taskli.appendChild(newtask);

  inputElement.value = "";
}

function loadtasks(){

let savedTasks = localStorage.getItem("tasks")
if(savedTasks){
    tasks = JSON.parse(savedTasks)
}
tasks.forEach(task => {
    let taskli = document.getElementById("tasklist")
    let newtask = document.createElement("li")
    newtask.innerHTML = task
    taskli.appendChild(newtask)
})
}
loadtasks()