// Task 0 — First Script
console.log("Name: Sergey Chepurnenko");
console.log("Group: SE-2422");

alert("Hello, JavaScript World!");

// Task 1 — Variables & Operators
let myName = "Sergey";
let age = 18;
let isStudent = true;

let sum = 10 + 5;
let product = 4 * 3;
let difference = 10 - 3;

console.log("Sum:", sum);
console.log("Product:", product);
console.log("Difference:", difference);

let message = "My name is " + myName + " and I am " + age + " years old.";
console.log(message);


// Task 2 — Changing Content
const text = document.getElementById("text");
const changeBtn = document.getElementById("changeTextBtn");

changeBtn.addEventListener("click", () => {
  text.textContent = "The text has been changed successfully!";
});
// Task 3 — Changing Styles
document.addEventListener("DOMContentLoaded", () => {
  const colorBox = document.getElementById("colorBox");
  const bgBtn = document.getElementById("bgBtn");
  const fontBtn = document.getElementById("fontBtn");

  bgBtn.addEventListener("click", () => {
    colorBox.style.setProperty("background-color", "#90EE90", "important"); 
  });

  fontBtn.addEventListener("click", () => {
    colorBox.style.fontSize = "24px";
  });
});



// Task 4 — Creating & Removing Elements
const list = document.getElementById("itemList");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

addBtn.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(newItem);
});

removeBtn.addEventListener("click", () => {
  if (list.lastElementChild) list.removeChild(list.lastElementChild);
});

// Task 5 — Mouse Events
const hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.setProperty("background-color", "orange", "important");
  hoverBox.style.setProperty("color", "white", "important");
});

hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.setProperty("background-color", "#0dcaf0", "important");
  hoverBox.style.setProperty("color", "black", "important");
});




// Task 6 — Keyboard Events
const inputField = document.getElementById("inputField");
const displayText = document.getElementById("displayText");

inputField.addEventListener("keyup", () => {
  displayText.textContent = inputField.value;
});

// Task 8 — To-Do List 
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || []; 

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks)); 
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center mt-1";

    const span = document.createElement("span");
    span.textContent = task.text;
    if (task.completed) {
      span.classList.add("text-decoration-line-through", "text-success");
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn btn-sm btn-danger";

    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    li.addEventListener("click", () => {
      task.completed = !task.completed;
      saveTasks();
      renderTasks();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

addTaskBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text === "") return;
  tasks.push({ text, completed: false });
  saveTasks();
  renderTasks();
  taskInput.value = "";
});

renderTasks();


const forms = document.querySelectorAll('.needs-validation');
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        const password = form.querySelector('#password');
        const confirmPassword = form.querySelector('#confirmPassword');
        if (password && confirmPassword) {
            if (password.value !== confirmPassword.value) {
              confirmPassword.setCustomValidity('Passwords do not match');
            } else {
              confirmPassword.setCustomValidity('');
            }
          }
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          } else {
            event.preventDefault();
            alert('Registration successful!');
            form.reset();
            form.classList.remove('was-validated');
          }
          form.classList.add('was-validated');
    }, false);
});
