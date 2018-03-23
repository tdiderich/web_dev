var todos = [];

var input = prompt("What would you like to do?");

while (input !== "quit") {
  if(input === "list") {
    listTodo();
  } else if(input === "new") {
    newTodo();
  } else if(input === "delete") {
    deleteTodo();
  } else if(input === "reverse") {
    printReverse();
  }
  else if(input === "revlog") {
    logReverse();
  }
  else if(input === "uni") {
    isUniform();
  }
  input = prompt("What would you like to do?");
} console.log("OKAY YOU QUIT");


// functions for loop

function listTodo() {
  console.log("***********");
  todos.forEach(function(todo, i) {
  console.log(i + ": " + todo);
  });
  console.log("***********");
}

function newTodo() {
  var newTodo = prompt("New todo:");
  todos.push(newTodo);
}

function deleteTodo() {
  // ask for index
  index = prompt("Enter the index of todo to delete:")
  //delete the todo
  console.log("Deleting " + todos[index])
  todos.splice(index, 1)
}

function printReverse() {
  console.log(todos.reverse());
}

function logReverse() {
  for(var i = todos.length-1; i >= 0; i--) {
        console.log(todos[i]);
    }
}

function isUniform() {
  var check = todos[0];
  for (var i = 1; i < todos.length; i++) {
    if(check !== todos[i]) {
      return false;
    }
  }
  return true
};
