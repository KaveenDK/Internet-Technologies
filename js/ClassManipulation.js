console.log("ClassManipulation.js loaded.....");

const heading = document.getElementById("heading");
console.log(heading.classList);

// 1. ClassList.add() - Adds one or more classes to an element
heading.classList.add("new-class", "highlight", "rounded");
console.log(heading.classList);

// 2. ClassList.remove() - Removes one or more classes from an element
heading.classList.remove("new-class", "highlight", "rounded");

// 3. ClassList.toggle() - Toggles between a class name (if the class exists then remove it, otherwise add it)
heading.classList.toggle("active");
console.log(heading.classList);

heading.classList.toggle("active");
console.log(heading.classList);