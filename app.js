let addButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let input = document.getElementById("inputField");

addButton.addEventListener("click", function () {
  if (input.value == "") {
    window.alert("Please enter a task.");
  } else {
    var paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = input.value;
    toDoContainer.appendChild(paragraph);
    input.value = "";
    paragraph.addEventListener("click", function () {
      paragraph.style.textDecoration = "line-through";
    });
    paragraph.addEventListener("dblclick", function () {
      toDoContainer.removeChild(paragraph);
    });
  }
});


