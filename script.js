const addButton = document.getElementById("add-button");
const toDoEntryBox = document.getElementById("todo-entry-box");
const toDoList = document.getElementById("todo-list");

addButton.addEventListener("click", addToDoItem);

function newToDoItem(itemText, completed) {
  const toDoItem = document.createElement("li");
  const toDoText = document.createTextNode(itemText);
  toDoItem.appendChild(toDoText);

  if (completed) {
    toDoItem.classList.add("completed");
  }

  toDoList.appendChild(toDoItem);
  toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

function addToDoItem() {
  const itemText = toDoEntryBox.value;
  newToDoItem(itemText, false);
  toDoEntryBox.value = "";
}

function toggleToDoItemState() {
  if (this.classList.contains("completed")) {
    this.classList.remove("completed");
  } else {
    this.classList.add("completed");
  }
}

function clearCompletedToDoItems() {
  const completedItems = toDoList.getElementsByClassName("completed");

  while (completedItems.length > 0) {
    completedItems.item(0).remove();
  }
}

function emptyList() {
  const toDoItems = toDoList.children;
  while (toDoItems.length > 0) {
    toDoItems.item(0).remove();
  }
}
