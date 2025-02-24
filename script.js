const user = prompt("Enter your name:");
console.log("Hello " + user);

let greetings = document.getElementById("greetings"); 
greetings.innerHTML = `Hello ${user}, I hope you are doing good!`;
greetings.style.color = "#f2edde"; 
greetings.style.fontSize = "30px"; 
greetings.style.fontWeight = "bold";
greetings.style.position = "absolute";
greetings.style.top = "4%"; 
greetings.style.left = "5%"; 

const today = new Date(); 
const formattedDate = today.toDateString(); 
let date = document.getElementById("date");
date.innerText = formattedDate;
date.style.position = "absolute";
date.style.top = "4%";
date.style.right = "5%";
date.style.color = "#f2edde"; 
date.style.fontSize = "25px"; 
date.style.fontWeight = "bold";
date.style.textDecoration = "underline";

const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const inputField = document.getElementById("to-do-input");

addBtn.addEventListener("click", function () {
    const taskText = inputField.value.trim();
    if (taskText === "") return;

    // Create task item
    const taskItem = document.createElement("li");
    taskItem.classList.add("task");

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");
    checkbox.style.fontFamily = "Montserrat";

    // Create task text span
    const taskSpan = document.createElement("span");
    taskSpan.innerText = taskText;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "Delete";

    // Append elements
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    // Clear input field
    inputField.value = "";

    // Checkbox event (strike-through effect)
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            taskSpan.style.textDecoration = "line-through";
            taskSpan.style.color = "#777";
        } else {
            taskSpan.style.textDecoration = "none";
            taskSpan.style.color = "#000";
        }
    });

    // Delete task event
    deleteBtn.addEventListener("click", function () {
        taskItem.remove();
    });
});
