console.log("DOMSelectors.js is loaded.....");

console.log(document);

// 1. Selects using element ID
const heading = document.getElementById("heading");
console.log(heading);

// 2. Selects using element by class name -returns an HTMLCollection
const paragraphs = document.getElementsByClassName("paragraph");
console.log(paragraphs);

// 3. Select element by tag name
const tags = document.getElementsByTagName("p");
console.log(tags);

// 4. Select the first element that matches a specified CSS selector(s) in the document.
const querySelector = document.querySelector(".box h2");
console.log(querySelector);

// 5. Selects all elements that match a specified CSS selector(s) - returns a NodeList
const querySelectorAll = document.querySelectorAll(".box h2");
console.log(querySelectorAll);
