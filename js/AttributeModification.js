console.log("AttributeModification.js loaded");

// 1. getAttribute() - Gets the value of an attribute on an element
const link = document.querySelector("a");
console.log(link.getAttribute("href"));

// 2. setAttribute() - Sets the value of an attribute on an element
link.setAttribute("href", "https://www.x.com");
console.log(link.getAttribute("href"));

link.setAttribute('target', '_blank');

// 3. removeAttribute() - Removes an attribute from an element
link.removeAttribute('target');
