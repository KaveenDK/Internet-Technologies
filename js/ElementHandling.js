console.log("ElementHandling.js loaded...");

// 1. createElement() - Create a Element with specific tag name
const newDiv = document.createElement("div");

newDiv.id = "alert-success";
newDiv.className = "alert alert-success";
newDiv.textContent = "Successfuly Created!";
newDiv.style.backgroundColor = "green";
newDiv.style.color = "white";
newDiv.style.borderRadius = "12px";
newDiv.style.padding = "10px";
newDiv.style.marginTop = "10px";
console.log(newDiv);

const card = document.querySelector(".card");

// 2. append() - Insert the Element at the end of the parent element
card.append(newDiv);

//remove element
// card.remove();

// example start
const newDiv2 = document.createElement("div");

newDiv2.id = "alert-warning";
newDiv2.className = "alert alert-warning";
newDiv2.textContent = "Warning!";
newDiv2.style.backgroundColor = "red";
newDiv2.style.color = "white";
newDiv2.style.borderRadius = "12px";
newDiv2.style.padding = "10px";
newDiv2.style.marginTop = "10px";
console.log(newDiv2);

const card2 = document.querySelector(".card");
card2.append(newDiv2);
// example end

// cloneNode() - Clone the Element
const colneDiv = newDiv2.cloneNode(true);
card.append(colneDiv);

console.log(card.hasChildNodes());