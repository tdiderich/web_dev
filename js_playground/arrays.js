// this is an introduction to js arrays and methods...basics...

// start array
var colors = ["red", "orange", "yellow"];

// nested array
var colors = [
  ["red", "orange", "yellow"],
  ["red", "orange", "yellow"],
  ["red", "orange", "yellow"]
];

// add to specific point in the index
colors[3] = "black";

// the push method can add to the end of an array
// + returns the length of the array
colors.push("purple");

// the pop method deletes the last item in an array
// + returns the value that was deleted
colors.pop();

// unshift adds to the beginning of an array
// + returns the length of the array
colors.unshift("white");

// method shift removes the first value in an array
// + returns the value that was deleted
colors.shift();

// indexOf() gives the first index of an item in an array
// + returns -1 if it is not present
colors.indexOf("white"); // 0

// slice() is used to copy certain portions of an array
two_four = colors.slice(1, 3); // index 2-4

// array iterations
// to do something over everything in a List

// for loop to iterate over an array
var colors = ["red", "orange", "yellow", "green"];

for(var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// forEach to iterate over an array

// this example is an anomymous function (Not global)
colors.forEach(function(getFunky)) {
  console.log("INSIDE THE FOR EACH " + getFunky);
}

// this is how it works with a normal function

// set funtion
function getFunky(color) {
  console.log("I love " + color)
  console.log("yes I do")
  console.log("I love " + color + " how bout you?")
}

// forEach with pre defined function
colors.forEach(getFunky) {
}

// compare and contrast loops
