var button = document.getElementById("enter"); // selects the button id dome element 
var input = document.getElementById("userinput"); // selects the user input id dome element
var ul = document.querySelector("ul"); // seletcs the ul dom element in html file
var buttonDelete = document.querySelector("ul");
var toggle = document.querySelector("ul");

// var d = new Date(); // add dates later on
// var dates = d.toLocaleString()

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.className ="notDone";
  // delete button x
  var deleteDiv = document.createElement("div")
  deleteDiv.id = "toggleStatus";

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "x";
  deleteButton.id = 'buttonDelete';
  deleteButton.classList = 'btn btn-danger float-sm-right';
  

  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(deleteDiv).appendChild(li).append(deleteButton);
  input.value = "";
  li.addEventListener("click", toggleDone);

  function toggleDone() {
    li.classList.toggle("done");
  }

}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function toggleDone() { // with out this empty function get error
 
}

// this is to delete the item
function deleteItem(target){
  if(target.id === 'buttonDelete') {
    target.parentElement.remove();
  }
}

// event listeners for button and click actionsS
document.getElementById('myList').addEventListener('click', function(e){
 deleteItem(e.target);
  e.preventDefault();
})

toggle.addEventListener('click', toggleDone);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


